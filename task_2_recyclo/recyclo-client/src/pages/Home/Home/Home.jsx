import { Helmet } from "react-helmet-async";
// import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularService from "../PopularService/PopularService";
import Testimonials from "../Testimonials/Testimonials";
import HeroBanner from "../HeroBanner/HeroBanner";
import HeroBannerService from "../HeroBannerService/HeroBannerService";
import TopCategory from "../TopCategory/TopCategory";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Recyclo | Home</title>
            </Helmet>
            <HeroBanner></HeroBanner>
            <HeroBannerService></HeroBannerService>
            <TopCategory></TopCategory>
            {/* <Banner></Banner> */}
            {/* <Category></Category> */}
            <PopularService></PopularService>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;