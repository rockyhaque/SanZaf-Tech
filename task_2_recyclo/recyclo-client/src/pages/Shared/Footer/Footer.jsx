import { IoLogoGooglePlaystore } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer px-10 py-20  bg-[#101211] ">
        <nav className="gap-5">
          <h6 className="font-bold text-slate-50 text-xl text-neutral-300">
            About Recyclo{" "}
          </h6>
          <a className="link link-hover w-56 text-neutral-400">
            Enjoy hassle-free buying and selling of recyclable materials. Join
            our community today and make a positive impact on the environment.
          </a>
          <a className="link link-hover text-neutral-300">
            (+880) 1742460399{" "}
            <span className="ml-2 mr-2 text-neutral-400">or</span>
            rockyhaque71@gmail.com
          </a>
        </nav>
        <nav className="gap-2">
          <h6 className="font-bold text-slate-50 text-xl text-neutral-300">
            My Account
          </h6>
          <a className="link link-hover mt-2 text-neutral-400">My Account</a>
          <a className="link link-hover text-neutral-400">Order History</a>
          <a className="link link-hover text-neutral-400">Shoping Cart</a>
          <a className="link link-hover text-neutral-400">Wishlist</a>
          <a className="link link-hover text-neutral-400">Settings</a>
        </nav>
        <nav className="gap-2">
          <h6 className="font-bold text-slate-50 text-xl text-neutral-300">
            Contact
          </h6>
          <a className="link link-hover mt-2 text-neutral-400">Faqs</a>
          <a className="link link-hover text-neutral-400">Terms & Condition</a>
          <a className="link link-hover text-neutral-400">Privacy Policy </a>
        </nav>
        <nav className="gap-2">
          <h6 className="font-bold text-slate-50 text-xl text-neutral-300">
            Proxy
          </h6>
          <a className="link link-hover mt-2 text-neutral-400">About</a>
          <a className="link link-hover text-neutral-400">Shop</a>
          <a className="link link-hover text-neutral-400">Product</a>
          <a className="link link-hover text-neutral-400">Products Details</a>
          <a className="link link-hover text-neutral-400">Track Order </a>
        </nav>
        <nav className="gap-2">
          <h6 className="font-bold text-slate-50 text-xl text-neutral-300">
            Download Our Mobile App{" "}
          </h6>
          <div className="flex gap-4 bg-[#1b1f1d] px-6 py-3 rounded-md">
            <IoLogoGooglePlaystore className="text-neutral-300 text-6xl" />
            <div>
              <h6 className="text-neutral-400">Download on the</h6>
              <h1 className=" text-xl text-neutral-300">Google play</h1>
            </div>
          </div>
        </nav>
      </footer>

      <footer className="bg-[#101211] px-10 cursor-pointer">
        <nav>
          <hr />
          <div className="flex justify-between items-center my-6 pb-6">
            <div className="flex gap-6 text-customWhite">
              <CiFacebook />
              <LuInstagram />
              <CiLinkedin />
              <FaXTwitter />
            </div>
            <div>
              <p className="text-neutral-400">Recyclo eCommerce © 2024. All Rights Reserved</p>
            </div>
            <div className="flex gap-5">
              <div className="border-2 border-customGray p-2 rounded-md"><img src="https://i.ibb.co/VHK0B10/ApplePay.png" alt="" /></div>
              <div className="border-2 border-customGray p-2 rounded-md"><img src="https://i.ibb.co/JmQ2qYR/visa-logo.png" alt="" /></div>
              <div className="border-2 border-customGray p-2 rounded-md"><img src="https://i.ibb.co/Xbz2gFB/Discover.png" alt="" /></div>
              <div className="border-2 border-customGray p-2 rounded-md"><img src="https://i.ibb.co/qDpnNf5/Mastercard.png" alt="" /></div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
