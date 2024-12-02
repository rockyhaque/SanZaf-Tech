import {
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaOpencart,
} from "react-icons/fa";
import { MdDashboard, MdOutlineAddComment } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import TopNavbar from "./../pages/Shared/TopNavbar/TopNavbar";
import Navbar from "../pages/Shared/Navbar/Navbar";
import BottomNavbar from "./../pages/Shared/BottomNavbar/BottomNavbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  // console.log(isAdmin);
  return (
    <div className="relative font-poppins bg-customPurple">
      <div className="fixed top-0 z-10">
        <TopNavbar></TopNavbar>
        <Navbar></Navbar>
        <BottomNavbar></BottomNavbar>
      </div>

      <div className="flex mt-44">
        {/* Side bar */}
        <div className="w-64 min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">
          <ul className="menu p-4 fixed">
            {isAdmin ? (
              <>
                <div className="mb-4">
                  {user && (
                    <div className="flex items-center justify-center gap-4 bg-customWhite rounded-md py-3">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      </div>
                      <div className="">
                        <div className=" text-[#101211] font-bold">
                          {user?.displayName}
                        </div>
                        <div>
                          <h3>Admin</h3>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <li>
                  <NavLink to="/dashboard/adminHome">
                    <MdDashboard />
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addProducts">
                    <MdOutlineAddComment />
                    Add Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageProducts">
                    <FaList></FaList>
                    Manage Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <RiSecurePaymentLine />
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <FaOpencart />
                    Shopping Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers></FaUsers>
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>
                    My Cart ({cart.length})
                  </NavLink>
                </li>
                

                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaList></FaList>
                    Payment History
                  </NavLink>
                </li>
              </>
            )}
            {/* Shared navlink */}
            <div className="divider divider-neutral"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/paper">
                <FaSearch></FaSearch>
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaEnvelope></FaEnvelope>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Dashboard content -> cart.jsx */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
