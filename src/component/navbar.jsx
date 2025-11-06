import { NavLink } from "react-router";

function navbar(props) {
  const toggleMenu = () => {
    document.querySelector("#toggle-navbar").classList.toggle("hidden");
  };

  return (
    <div id="navbar-menu" className="flex justify-between items-center">
      <div id="navbar-logo">
        <a href="#" className="flex items-center gap-2">
          <img
            className="object-cover max-w-11 max-h-12"
            src={props.navbarLogo}
            alt="Navbar Logo"
          />
          <span className="text-lg font-medium">ToDesktop</span>
        </a>
      </div>

      <div id="service-menu">
        <nav className="hidden lg:flex gap-10"> 
          <NavLink to="/pricing" id="nav-menulist" className="text-lg">Pricing</NavLink>
          <NavLink to="/docs" id="nav-menulist" className="text-lg">Docs</NavLink>
          <NavLink to="/changelog" id="nav-menulist" className="text-lg">Changelog</NavLink>
          <NavLink to="/blog" id="nav-menulist" className="text-lg">Blog</NavLink>
          <NavLink to="/login" id="nav-menulist" className="text-lg">Login</NavLink>
        </nav>
      </div>

      <div
        id="developer-toggle-button"
        className="hidden lg:flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-2 hover:border-gray-700 "
      >
        <img src={props.developerToggle} />
        <p className="text-lg">
          Electron Developers <i className="fa-solid fa-arrow-right"></i>
        </p>
      </div>

      <div id="menu-bar" onClick={toggleMenu} className="lg:hidden flex items-center text-2xl">
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Toggle Navbar  */}
      <div id="toggle-navbar" className="hidden fixed bg-white inset-0 lg:hidden ">
        <div id="navbar-menu" className="flex justify-between">
          <div id="navbar-logo">
            <a href="#" className="flex items-center gap-2">
                <img className="object-cover max-w-11 max-h-12" src={props.navbarLogo} alt="Navbar Logo"/>
                <span className="text-lg font-medium">ToDesktop</span>
            </a>
          </div>
          <div id="menu-bar" onClick={toggleMenu} className="lg:hidden flex items-center text-2xl"><i className="fa-solid fa-xmark"></i></div>
        </div>
        
        <div id="toggle-menubar">
            <nav className="flex flex-col items-start gap-7"> 
                <NavLink id="nav-menulist" className="text-lg">Pricing</NavLink>
                <NavLink id="nav-menulist" className="text-lg">Docs</NavLink>
                <NavLink id="nav-menulist" className="text-lg">Changelog</NavLink>
                <NavLink id="nav-menulist" className="text-lg">Blog</NavLink>
                <NavLink id="nav-menulist" className="text-lg">Login</NavLink>
            </nav>
        </div>

        <div id="toggle-menu-button" className="lg:hidden flex justify-center items-center gap-2 border border-gray-500 rounded-lg max-w-60">
        <img src={props.developerToggle} />
        <p className="text-lg">Electron Developers</p>
      </div>
      </div>
    </div>
  );
}

export default navbar;
