import { FaTrashAlt } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  // Date create
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIndex = currentDate.getMonth();
  const monthName = monthNames[monthIndex];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${day} ${monthName}, ${year}`;

  // Current Time
  const currentTime = new Date();
  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedTime = `${hours}:${formattedMinutes} ${amPm}`;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle heading="My Shopping Cart"></SectionTitle>
      <div className="border border-neutral-400 rounded-lg px-4 py-8">
        
        {/* Table Content */}
        <div className="overflow-x-auto">
        <h1 className="text-xl font-semibold">Details</h1>
          <table className="table  w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Order ID</th>
                <th>Date</th>

                <th>Name</th>
                <th>Price</th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="rounded-lg w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <th>#{item._id.toString().slice(-4)}</th>
                  <td>{formattedDate}</td>

                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-md hover:bg-customRed hover:text-customWhite"
                    >
                      <TiDeleteOutline className="text-2xl" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="border border-neutral-400 rounded-lg px-4 py-8 mt-5">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">Cart Total ({cart.length})</h1>
          <p className="font-semibold">{formattedTime}</p>
        </div>
        <div className="flex justify-between py-2 mt-3">
          <h1>Subtotal</h1>
          <p>৳ {totalPrice}</p>
        </div>
        <h1 className="border border-neutral-200"></h1>
        <div className="flex justify-between mt-2">
          <h1>Shipping</h1>
          <p>Free</p>
        </div>
        <h1 className="border border-neutral-200 mt-2"></h1>
        <div className="flex justify-between mt-2">
          <h1>Total</h1>
          <p className="font-semibold">৳ {totalPrice}</p>
        </div>

        <div className="w-full text-center">
          {/* <button className="btn bg-customBlack text-customWhite rounded-full px-24">
            Proceed to checkout
          </button> */}
          {cart.length ? (
            <Link to="/dashboard/payment">
              <button className="btn bg-customBlack text-customWhite rounded-full px-24">
            Proceed to checkout
          </button>
            </Link>
          ) : (
            
            <button disabled className="btn bg-customBlack text-customWhite rounded-full px-24">
            Proceed to checkout
          </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
