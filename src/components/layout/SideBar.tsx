
import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
    goToMobileSuits: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    goToAbout: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Sidebar = (props : SidebarProps) => {
    return (
        
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <img src="assets/images/comps.png" height={60} width={80} alt="" />
            </a>

            <hr className="sidebar-divider"></hr>

            <div className="sidebar-heading">Main Menu</div>
            <li className="nav-item">
                <Link className="nav-link" to="/MobileSuits" onClick={props.goToMobileSuits}>
                    <i className="fab fa-android"></i> <span> Mobile Suits</span>
                </Link>

                <Link className="nav-link" to="/About" onClick={props.goToAbout}>
                    <i className="fas fa-info-circle"></i> <span> About</span>
                </Link>
            </li>
            
            <hr className="sidebar-divider"></hr>
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    );
};

export default Sidebar;
