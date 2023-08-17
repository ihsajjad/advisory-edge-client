import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const options = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${isActive ? "active-item" : ""} nav-item`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            ` ${isActive ? "active-item" : ""} nav-item`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            ` ${isActive ? "active-item" : ""} nav-item`
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            ` ${isActive ? "active-item" : ""} nav-item`
          }
        >
          Testimonials
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              ` ${isActive ? "active-item" : ""} nav-item`
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[var(--bg-primary)] text-base-100 lg:px-10 sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars />
          </label>
          <ul
            tabIndex={0}
            className="text-black menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {options}
          </ul>
        </div>
        <Link to="/" className=" text-2xl font-bold">
          Advisory<span className="text-[var(--main-color)]">Edge</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* menu */}
        <ul className="space-x-4 menu-horizontal px-1">{options}</ul>
      </div>

      <div className="navbar-end">
        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <img
                src={`${
                  user?.photoURL ||
                  "https://i.postimg.cc/d1bNpF8n/user-solid.png"
                }`}
                alt=""
                className="h-10 w-10 rounded-full bg-[var(--main-color)] p-1"
              />

              <button onClick={logOut} className="btn btn-sm">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
