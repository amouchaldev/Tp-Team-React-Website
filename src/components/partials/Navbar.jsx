import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <NavLink className="navbar-brand" to="">
          Jeudi.
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  `nav-link ${navData.isActive && "active"}`
                }
                to="/posts"
              >
                posts
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  `nav-link ${navData.isActive && "active"}`
                }
                to="/users"
              >
                users
              </NavLink>
            </li>
    
            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  `nav-link ${navData.isActive && "active"}`
                }
                to="/todos"
              >
                todos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={(navData) =>
                  `nav-link ${navData.isActive && "active"}`
                }
                to="/albums"
              >
                albums
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
