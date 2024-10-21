import { Route, Routes, useNavigate } from 'react-router-dom';

import './assets/bootstrap/admin2-temp/admin2-css/sb-admin-2.min.css';
import './assets/bootstrap/fontawesome-free/fontawesome-css/all.min.css';

//Layout
import TopBar from './components/layout/TopBar';
import PageFooter from './components/layout/PageFooter';
import SideBar from './components/layout/SideBar';

//Pages
import MobileSuits from './pages/MobileSuits/MobileSuits';
import About from './pages/About/About'

function App() {

    const navigate = useNavigate();

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
                            <Route path="/MobileSuits" element={<MobileSuits />} />
                            <Route path="/About" element={<About />} />
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
