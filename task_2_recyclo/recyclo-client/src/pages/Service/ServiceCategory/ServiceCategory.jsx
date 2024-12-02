import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ServiceItem from "../../Shared/ServiceItem/ServiceItem";

const ServiceCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <ServiceItem key={item._id} item={item}></ServiceItem>
        ))}
      </div>

      {/* Button */}
      <Link to={`/order/${title}`}>
        <div className="text-center mt-10">
          <button className="bg-customGreen btn font-semibold text-customWhite">
            Order Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCategory;
