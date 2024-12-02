import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="mt-48">
      <div
        className="hero h-[500px] relative rounded-2xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/HG1xh5c/Image-1.png)",
        }}
      >
        {/* Shadow */}
        {/* <div
            className="absolute inset-0 bg-gradient-to-r from-customBlack to-transparent pointer-events-none opacity-60 z-10 rounded-2xl"
            
          ></div> */}

        <div className="text-neutral-content w-full">
          <div className="mx-24">
            <p>Welcome to recyclo</p>
            <h1 className="text-5xl font-bold text-customWhite">
              Transforming <br /> Waste into Value
            </h1>

            <h3 className="text-2xl mt-4">
              Sale up to <span className="text-customOrange">30% OFF</span>
            </h3>
            <p>Free shipping on all your order. we deliver, you enjoy</p>
            <Link to="/order/paper">
              <div className="mt-8">
                <button className="btn bg-customGreen border-0 text-customWhite rounded-full px-10">
                  Shop now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
