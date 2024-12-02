import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import GreetingMessage from "./GreetingMessage";
import { IoBagHandleOutline } from "react-icons/io5";

// import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <div className="flex justify-center items-center">
          <Link to="/dashboard/cart">
            <div className="flex">
              <IoBagHandleOutline className="text-3xl"></IoBagHandleOutline>
              <div className="badge bg-[#00CC71] relative right-4 bottom-2">
                {cart.length}
              </div>
            </div>
          </Link>
          <div>
            <p className="text-customGray">Shopping cart</p>
            <p className="font-semibold">৳{totalPrice}.00</p>
          </div>
        </div>
      </li>
    </>
  );

  return (
    <>
      <div className="flex w-[100vw] justify-around items-center navbar max-w-screen-xl text-[#101211] bg-neutral-50">
        <div className="">
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
          <div>
            <div className="btn btn-ghost normal-case text-xl">
              <img
                className="w-24"
                src="https://i.ibb.co/tJJ4KM1/Logo-light.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto hidden md:block lg:block"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center items-center gap-20">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <div className="flex items-center justify-center gap-4">
                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <div className="">
                  <div>
                    <GreetingMessage></GreetingMessage>
                  </div>
                  <div className=" text-[#101211] font-bold">
                    {user?.displayName}
                  </div>
                </div>

                <button
                  onClick={handleLogOut}
                  className="btn text-[#DC143C] font-bold btn-ghost"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <>
                <div>
                  <div>
                    <div>
                      <GreetingMessage></GreetingMessage>
                    </div>
                    <Link className="font-semibold" to="/login">Login/Sign Up</Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
