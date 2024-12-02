import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiStar } from "react-icons/ci";
import { IoBagCheckOutline, IoLeafOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoCubeOutline } from "react-icons/io5";
import Testimonials from './../Home/Testimonials/Testimonials';

const About = () => {
  return (
    <section className="mt-56">
      {/* Welcome */}
      <div className="flex justify-center items-center gap-8">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">
            Welcome to Recyclo, your premier <br /> destination for sustainable{" "}
            <br /> waste solutions.
          </h2>
          <p className="text-customGray mt-5">
            At Recyclo, we&apos;re dedicated to revolutionizing the way we think
            about waste. Our platform connects waste sellers with buyers,
            facilitating the seamless exchange of recyclable materials and
            promoting a circular economy. With a commitment to environmental
            stewardship and innovation, we&apos;re proud to be at the forefront
            of the green revolution.
          </p>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-xl"
            src="https://i.ibb.co/ZdGNNxV/b18be2d32893b48dc617576bc83b0d44.png"
            alt=""
          />
        </div>
      </div>

      {/* Why */}
      <div className="flex justify-center items-center gap-8 mt-16 ">
        <div className="w-1/2">
          <img
            className="rounded-xl"
            src="https://i.ibb.co/WK9SHXh/d53ae755e611853d00aa4a001d2c0492.png"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Why Recyclo?</h2>
          <p className="text-customGray mt-5">
            Our mission is simple: to create a world where waste is not seen as
            a problem but as a valuable resource waiting to be utilized. Through
            our platform, we strive to promote environmental stewardship, reduce
            landfill waste, and foster a more sustainable future for generations
            to come.
          </p>
          <div className="grid grid-cols-2 my-4 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex bg-customCreamyGreen w-11 p-3 rounded-full">
              <IoLeafOutline />
              </div>
              <div>
                <h4 className="font-semibold">Wide Range of Materials</h4>
                <p className="text-customGray">100% healthy & Fresh food.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-customCreamyGreen w-11 p-3 rounded-full">
                <TfiHeadphoneAlt />
              </div>
              <div>
                <h4 className="font-semibold">Great Support 24/7</h4>
                <p className="text-customGray">Instant access to Contact</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-customCreamyGreen w-11 p-3 rounded-full">
                <CiStar />
              </div>
              <div>
                <h4 className="font-semibold">Customer Feedback</h4>
                <p className="text-customGray">Our happy customer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-customCreamyGreen w-11 p-3 rounded-full">
                <IoBagCheckOutline />
              </div>
              <div>
                <h4 className="font-semibold">100% Sucure Payment</h4>
                <p className="text-customGray">We ensure your money is save</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-customCreamyGreen w-11 p-3 rounded-full">
                <LiaShippingFastSolid />
              </div>
              <div>
                <h4 className="font-semibold">Trusted Shipping</h4>
                <p className="text-customGray">
                  Trusted shipping with discount
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-customCreamyGreen w-11 p-3 rounded-full">
                <IoCubeOutline />
              </div>
              <div>
                <h4 className="font-semibold">Environmental Impact</h4>
                <p className="text-customGray">100% healthy & Fresh food.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order */}
      <div className="flex justify-center items-center gap-8 mt-16">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">
            We Delivered, You <br /> Enjoy Your Order.
          </h2>
          <p className="text-customGray mt-5">
          Join us at Recyclo and be a part of the solution. Together, let&apos;s reimagine waste and build a more sustainable future for generations to come.
          </p>
          <button className="btn bg-customBlack hover:bg-customGreen rounded-full text-customWhite px-10 mt-12">Shop Now</button>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-xl"
            src="https://i.ibb.co/6HrDWMW/fee3f611378df96aa121bddb6ad820fc.png"
            alt=""
          />
        </div>
      </div>

      {/* Testimonial */}
      <Testimonials></Testimonials>
    </section>
  );
};

export default About;
