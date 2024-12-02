import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { BiSolidCartAdd } from "react-icons/bi";

const ProductCard = ({ item }) => {

  const { name, image, price, service, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart item to the db
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-96 w-full" src={image} alt="Product" />
      </figure>

      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p>{service}</p>
        <div>
          <img className="h-12 w-30" src="https://i.ibb.co/tp54CZH/rating-cp.png" alt="" />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="">
              <span className="text-2xl font-semibold">৳ </span><span className="text-2xl font-semibold">{price}</span> BDT/kg
            </p>
          </div>
          {/* Button */}
          <div onClick={handleAddToCart} className="">
            <button className="bg-neutral-200 hover:bg-customGreen rounded-full p-3">
              <BiSolidCartAdd className="text-4xl " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
