import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Product from "../Pages/Product";
// import SingleProduct from "./SingleProduct";

import Card from "./Card";

import food3 from '../assets/food3.png';

const ProductSlider = () => {

  const product = [10, 20, 30, 40, 50, 60];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable auto play
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      }
    ]
  };

  return (
    // {...settings}
    <div className="flex justify-center">
       <Slider {...settings}> 
        {
          product.map((el) => {
            return (

              <Card img={food3} key={el} />
            )
          })
        }
     </Slider>  

    </div>
  );
}

export default ProductSlider;