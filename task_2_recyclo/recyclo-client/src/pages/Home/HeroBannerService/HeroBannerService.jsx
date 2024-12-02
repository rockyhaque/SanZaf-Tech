import { MdShoppingCartCheckout } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";

const HeroBannerService = () => {
  return (
    <div className="hidden md:hidden lg:block">
      <div className="flex justify-center bg-customWhite relative -mt-10 mx-16 py-7 rounded-md shadow-2xl space-x-12 text-xs ">
        <div className="flex justify-center items-center gap-3">
          <div>
            <MdShoppingCartCheckout className="text-xl" />
          </div>
          <div>
            <h2 className="font-semibold">Free Shipping</h2>
            <p>Free shipping on all your order</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div>
            <FaHeadset className="text-xl" />
          </div>
          <div>
            <h2 className="font-semibold">Customer Support 24/7</h2>
            <p>Instant access to Support</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div>
            <IoBagCheckOutline className="text-xl" />
          </div>
          <div>
            <h2 className="font-semibold">100% Secure Payment</h2>
            <p>We ensure your money is save</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div>
            <CiMoneyCheck1 className="text-xl" />
          </div>
          <div>
            <h2 className="font-semibold">Money-Back Guarantee</h2>
            <p>30 Days Money-Back Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerService;
