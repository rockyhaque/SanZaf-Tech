import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="max-w-screen-lg mx-auto">
      <SectionTitle
        subHeading={"Put Your Trust"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          {/* <h3 className="text-4xl uppercase text-center -mt-16 text-gray-700">
            Paper
          </h3> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          {/* <h3 className="text-4xl uppercase text-center -mt-16 text-gray-700">
            Metal
          </h3> */}
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-auto w-auto" src={slide3} alt="" />
          {/* <h3 className="text-4xl uppercase text-center -mt-16 text-gray-700">
            Plastic
          </h3> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          {/* <h3 className="text-4xl uppercase text-center  text-gray-700">
            Glass
          </h3> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          {/* <h3 className="text-4xl uppercase text-center  text-gray-700">
            E-Waste
          </h3> */}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
