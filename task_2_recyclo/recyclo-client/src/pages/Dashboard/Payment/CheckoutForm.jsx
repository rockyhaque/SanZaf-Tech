import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useCart from "./../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa6";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // moment.js
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          cartImages: cart.map((item) => item.image),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res.data);
        refetch();

        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-10 py-3 border-4 border-customBlue w-40 rounded-md text-customBlue space-y-2 mb-6">
        <FaCreditCard className="" />
        <h4 className="font-semibold">Card</h4>
      </div>

      <div className="flex justify-between">
        <label className="text-neutral-600 font-semibold">Card Info</label>

        <div className="flex gap-3">
          <div>
            <img src="https://i.ibb.co/347KnFP/Frame.png" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/vBwf1sN/319.png" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/dt89Xjr/Frame.png" alt="" />
          </div>
          
        </div>
      </div>

      <div className="border-2 border-y-neutral-300 px-2 py-4 rounded-md">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>

      <div className="mt-4">
        <label className="text-neutral-600 font-semibold">Country</label>
        <select className="select select-bordered w-full bg-customPurple">
          <option disabled selected>
            Bangladesh
          </option>
          <option>UAE</option>
          <option>India</option>
          <option>Belgium</option>
          <option>China</option>
          <option>Denmark</option>
        </select>
      </div>

      <div className="">
        <button
          className="btn bg-customBlack text-customWhite rounded-lg w-full mt-12"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay ৳ {totalPrice}.00
        </button>
      </div>
      <div className="flex justify-center items-center mt-8">
        <p>Secured by: </p>
        <img
          className="w-20"
          src="https://i.ibb.co/nsbXFm9/stripe.png"
          alt=""
        />
      </div>
      <p className="text-customGreen mt-2">{error}</p>
      {transactionId && (
        <p className="text-green-800">Your transaction id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
