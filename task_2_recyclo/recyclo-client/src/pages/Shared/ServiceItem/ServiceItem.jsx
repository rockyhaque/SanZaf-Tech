
import { BiSolidCartAdd } from "react-icons/bi";





const ServiceItem = ({ item }) => {
  const { name, image, price, service, _id } = item;



  return (
    <div className="flex border-2 border-neutral-100 rounded-lg hover:bg-customCreamyGreen py-4 px-3">
      <div className="flex w-11/12 gap-4">
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={image} />
          </div>
        </div>
        <div>
          <h3 className="uppercase font-bold">{name}</h3>
          <p className="w-full">{service}</p>
        </div>
      </div>
      <div className="flex-1 text-end ">
        <p className="text-green-700 text-xl font-bold">{price} ৳</p>
      </div>
    </div>

  );
};

export default ServiceItem;
