// import { Outlet, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import TopNavbar from "../pages/Shared/TopNavbar/TopNavbar";
import BottomNavbar from "./../pages/Shared/BottomNavbar/BottomNavbar";

const Main = () => {
  // const location = useLocation();
  // const noHeaderFooter =
  //   location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="relative font-poppins">
      <div className="fixed top-0 z-10">
        <TopNavbar></TopNavbar>
        <Navbar></Navbar>
        <BottomNavbar></BottomNavbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
