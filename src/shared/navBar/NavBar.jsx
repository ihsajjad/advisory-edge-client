import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
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
          to="/book-now"
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
    </>
  );
  return (
    <div className="navbar bg-[var(--bg-primary)] text-base-100 lg:px-10">
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
          <Link to="/login" className="font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
