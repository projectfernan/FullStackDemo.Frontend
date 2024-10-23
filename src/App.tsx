import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import './assets/bootstrap/admin2-temp/admin2-css/sb-admin-2.min.css';
import './assets/bootstrap/fontawesome-free/fontawesome-css/all.min.css';

//Layout
import TopBar from './components/layout/TopBar';
import PageFooter from './components/layout/PageFooter';
import SideBar from './components/layout/SideBar';

//Pages
import MobileSuitsPage from './pages/MobileSuits/MobileSuitsPage';
import AboutPage from './pages/About/AboutPage'

//services
import { GetJwtToken } from '@AuthenticationService/AuthenticationService'

//Types
import { IApiBodyResponse } from '@IApiBodyResponse/*';
import { IJwtToken } from 'types/common/IJwtToken';

function App() {

    const navigate = useNavigate();
    const localBearer = localStorage.getItem("bearer");

    const getBearerToken = async () =>{
      if (!localBearer) {

        const res: IApiBodyResponse = await GetJwtToken();
        const token: IJwtToken = res.data;
  
        localStorage.setItem("bearer", JSON.stringify(token));
      }
    }

    useEffect(()=>{
      getBearerToken();
    },[]);

    const goToMobileSuits = () =>{
        navigate('/MobileSuits')
    };

    const goToAbout = () =>{
      navigate('/About')
  };

  return(
    <>
      <div className="top">
        <div id="wrapper">
            <SideBar goToMobileSuits = {goToMobileSuits} goToAbout = {goToAbout} />
            
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">

                    <TopBar />
                    <div className="container-fluid">
                        {/* render page here */}
                        <Routes>
                            <Route path="/MobileSuits" element={<MobileSuitsPage />} />
                            <Route path="/About" element={<AboutPage />} />
                        </Routes>
                    </div>
                </div>
                <PageFooter />
            </div>
        </div>
      </div>  
    </>
  )
}

export default App
