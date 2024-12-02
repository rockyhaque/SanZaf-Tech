import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonials.css";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://recyclo-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="my-20 bg-customGreenGray pt-2">
      <SectionTitle heading="Testimonials"></SectionTitle>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-28 mb-10 mt-3 py-16 px-28  bg-customWhite rounded-lg shadow-2xl">
              <div className="w-full">
                <img
                  className="w-10"
                  src={"https://i.ibb.co/GdXMHRN/comma.png"}
                  alt=""
                />
              </div>
              <div>
                <p className="py-8">{review.details}</p>
              </div>

              <div className="flex justify-between w-full">
                <div className="flex justify-center items-center gap-4">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={review?.imgURL} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                    <h5 className="text-customGray text-sm">{review?.role}</h5>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
