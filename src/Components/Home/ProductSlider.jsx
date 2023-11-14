import backgroundImage from '../../assets/product-bg.png'
import veg from '../../assets/veg.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  PrevArrow ,NextArrow} from '../../utils/arrow';


var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const ProductSlider = () => {
    const products = [13, 30, 34, 56, 45, 20, 90, 89, 78];
    return (
        <>
            <div className="container mx-auto mt-8">
                <Slider {...settings}>
                    {
                        products.map((product) => {
                            return (
                                <>
                                    <div className="px-2 w-full">
                                        <div className="product-bg bg-cover bg-gray-100 flex  shadow-lg justify-center p-2">
                                            <img
                                                src={veg}
                                                className="w-[100%] object-cover rounded"
                                            />
                                        </div>
                                        <h3 className="mt-2 text-lg font-semibold">Name</h3>
                                    </div>
                                </>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}
export default ProductSlider;