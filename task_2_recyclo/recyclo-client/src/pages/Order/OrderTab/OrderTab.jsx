import ProductCard from "../../../components/ProductCard/ProductCard";

const OrderTab = ({items}) => {

  return (
    <div className="grid md:grid-cols-3 gap-10 ">
      {items.map((item) => (
        <ProductCard key={item._id} item={item}></ProductCard>
      ))}
    </div>
  );
};

export default OrderTab;
