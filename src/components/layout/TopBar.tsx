
const TopBar = () => {

    return (
        <nav className="navbar navbar-expand navbar-light bg-gradient-info topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            
            <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"></div>
                
                <li className="nav-item dropdown no-arrow">
                    <a 
                        className="nav-link dropdown-toggle" 
                        href="#" 
                        id="userDropdown" 
                        role="button"
                        aria-haspopup="true" 
                    >
                        <span className="mr-2 d-none d-lg-inline small user-name">
                            Guest
                        </span>
                        <i className="fas fa-fw fa-user-circle fa-2x"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default TopBar;
