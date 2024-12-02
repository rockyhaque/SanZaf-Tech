import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const TopCategory = () => {
  return (
    <div>
      <SectionTitle heading="Top Category"></SectionTitle>
      <div className="grid grid-cols-6 gap-8">
        <Link to="/order/paper">
          <div className="flex flex-col justify-center items-center border-2 border-neutral-100 rounded-lg hover:bg-customCreamyGreen py-4">
            <div>
              <img
                className="w-20"
                src="https://i.ibb.co/3BqkL8k/paper.png"
                alt=""
              />
            </div>
            <div>
              <h2>Paper Products</h2>
            </div>
          </div>
        </Link>
        <Link to="/order/plastic">
          <div className="flex flex-col justify-center items-center border-2 border-neutral-100 rounded-lg hover:bg-customCreamyGreen py-4">
            <div>
              <img
                className="w-20"
                src="https://i.ibb.co/hWd7jtF/pastic.png"
                alt=""
              />
            </div>
            <div>
              <h2>Plastic Products</h2>
            </div>
          </div>
        </Link>

        <Link to="/order/metal">
          <div className="flex flex-col justify-center items-center border-2 border-neutral-100 rounded-lg hover:bg-customCreamyGreen py-4">
            <div>
              <img
                className="w-20"
                src="https://i.ibb.co/Qb468cf/metal.png"
                alt=""
              />
            </div>
            <div>
              <h2>Metal Products</h2>
            </div>
          </div>
        </Link>

        <Link to="/order/glass">
          <div className="flex flex-col justify-center items-center border-2 border-neutral-100 rounded-lg hover:bg-customCreamyGreen py-4">
            <div>
              <img
                className="w-20"
                src="https://i.ibb.co/42b3Dfx/Glass.png"
                alt=""
              />
            </div>
            <div>
              <h2>Glass Products</h2>
            </div>
          </div>
        </Link>

        <Link to="/order/textile">
          <div className="flex flex-col justify-center items-center border-2 border-neutral-100 rounded-lg hover:bg-customCreamyGreen py-4">
            <div>
              <img
                className="w-20"
                src="https://i.ibb.co/G2B4KR2/textile.png"
                alt=""
              />
            </div>
            <div>
              <h2>Textile and Fabric</h2>
            </div>
          </div>
        </Link>

        <Link to="/order/electronic">
          <div className="flex flex-col justify-center items-center border-2 border-neutral-100 rounded-lg hover:bg-customCreamyGreen py-4">
            <div>
              <img
                className="w-20"
                src="https://i.ibb.co/LQ24fSD/electronic.png"
                alt=""
              />
            </div>
            <div>
              <h2>Electronic Waste</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopCategory;

// https://i.ibb.co/LQ24fSD/electronic.png
// https://i.ibb.co/42b3Dfx/Glass.png
// https://i.ibb.co/Qb468cf/metal.png
// https://i.ibb.co/3BqkL8k/paper.png
// https://i.ibb.co/hWd7jtF/pastic.png
// https://i.ibb.co/G2B4KR2/textile.png
