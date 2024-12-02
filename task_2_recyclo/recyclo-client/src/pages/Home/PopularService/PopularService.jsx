import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ServiceItem from "../../Shared/ServiceItem/ServiceItem";
import useService from "../../../hooks/useService";
import { Link } from "react-router-dom";

const PopularService = () => {
  const [service] = useService();
  const popular = service.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle heading="Featured Products"></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <ServiceItem key={item._id} item={item}></ServiceItem>
        ))}
      </div>
      <Link to={`/order/paper`}>
        <div className="text-center mt-10">
          <button className="bg-customGreen btn font-semibold text-customWhite">
            View More
          </button>
        </div>
      </Link>
    </section>
  );
};

export default PopularService;
