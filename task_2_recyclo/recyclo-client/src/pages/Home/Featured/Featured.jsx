import { useState, useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateCountdown() {
    const eventDate = new Date("June 08, 2024 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const difference = eventDate - currentDate;

    if (difference <= 0) {
      // Event has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="featured-item bg-fixed pt-8">
      <SectionTitle heading="Hot Deals"></SectionTitle>
      <div className="md:flex justify-center items-center py-20 pt-8 ">
        <div className="w-full  text-center">
          <p className="font-bold text-xl mb-4">June 08, 2024</p>
          <p className="mb-4 text-xl text-neutral-700">
            Do not miss out on this exclusive deal! Get up to 50% off on
            selected items. <br /> Hurry, while stocks last!
          </p>
          <div className="text-xl font-bold">
            {/* <p className="mb-4">Grab Your Deal</p> */}
            <div className="flex justify-center items-center gap-8 text-customRed">
              <div className="border-2 border-neutral-400 p-2 rounded-lg">
                <p>Days</p>
                <p className="text-xl">{countdown.days}</p>
              </div>
              <div className="border-2 border-neutral-400 p-2 rounded-lg">
                <p>Hours</p>
                <p>{countdown.hours}</p>
              </div>
              <div className="border-2 border-neutral-400 p-2 rounded-lg">
                <p>Minutes</p>
                <p>{countdown.minutes}</p>
              </div>
              <div className="border-2 border-neutral-400 p-2 rounded-lg">
                <p>Seconds</p>
                <p>{countdown.seconds}</p>
              </div>
            </div>
          </div>
          <Link to={`/order/paper`}>
            <div className="text-center mt-14">
              <button className="bg-customBlack btn font-semibold text-customWhite border-0">
                View More
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
