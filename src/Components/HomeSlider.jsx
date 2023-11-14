import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from '../assets/banner2.jpg';
import MainSlider from "./Home/MainSlider";

const HomeSlider = () => {

  const product = [10, 20, 30, 40, 50, 60];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable auto play
    autoplaySpeed: 2000,
      responisive: [
      {
        breakpoint: 1280,
        settingss: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1000,
        settingss: {
          slidesToShow: 1
        }
      },
    ]
  };

  return (

    <div className="relative">
      <Slider {...settings}>
        {
          product.map((el) => {
            return (
              <MainSlider img={slider1} key={el} />
            )
          })
        }
      </Slider>
    </div>
  );
}

export default HomeSlider;