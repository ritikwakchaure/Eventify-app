import { NavLink } from "react-router-dom";
import homePage from "/home.jpg";
import { MdLibraryAdd } from "react-icons/md";

const Header = () => {
  return (
    <header className="container mt-3">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <img 
              src={homePage} 
              alt="Eventify logo" 
              className="img-fluid rounded"
              style={{ width: "180px", height: "70px" }} 
            />
          </NavLink>

           <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-2">
               <li className="nav-item mx-2">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `nav-link fw-semibold ${isActive ? "active text-primary" : "text-dark"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `nav-link fw-semibold ${isActive ? "active text-primary" : "text-dark"}`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `nav-link fw-semibold ${isActive ? "active text-primary" : "text-dark"}`
                  }
                >
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item mx-2">
                <NavLink to="/events" 
                   className={({ isActive }) => 
                    `nav-link ${isActive ? "active text-primary" : "text-danger"}`
                  }                    
                >
                     <MdLibraryAdd/>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
      <hr />
    </header>
  );
};

export default Header;