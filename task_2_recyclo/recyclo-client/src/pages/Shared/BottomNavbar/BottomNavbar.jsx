import { Link } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const BottomNavbar = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const navOptions = (
    <div className="flex">
      <li>
        <Link className="hover:bg-customGreen hover:text-customBlack" to="/">Home</Link>
      </li>
      <li>
        <Link className="hover:bg-customGreen hover:text-customBlack" to="/service">Our Service</Link>
      </li>
      <li>
        <Link className="hover:bg-customGreen hover:text-customBlack" to="/order/paper">Buy Wastes</Link>
      </li>
      <li>
        <Link className="hover:bg-customGreen hover:text-customBlack" to="/faq">FAQ’s</Link>
      </li>
      <div>
        {user && isAdmin && (
          <li>
            <Link className="hover:bg-customGreen hover:text-customBlack" to="/dashboard/adminHome">Dashboard</Link>
          </li>
        )}
        {user && !isAdmin && (
          <li>
            <Link className="hover:bg-customGreen hover:text-customBlack" to="/dashboard/userHome">Dashboard</Link>
          </li>
        )}
      </div>
      <li>
        <Link className="hover:bg-customGreen hover:text-customBlack" to="/about">About Us</Link>
      </li>
      <li>
        <Link className="hover:bg-customGreen hover:text-customBlack" to="/contact">Contact Us</Link>
      </li>
    </div>
  );

  return (
    <div className="bg-[#101211] ">
      <div className="navbar max-w-screen-xl text-neutral-300">
        <div className="ml-20">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black text-neutral-300 bg-opacity-30"
            >
              {navOptions}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
