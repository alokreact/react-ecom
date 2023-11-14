import CategoryCard from "../Components/CategoryCard";
// import FeatureProduct from "../Components/Product/FeatureProduct";
// import HomeSlider from "../Components/HomeSlider";

// import Slider from "../Components/Slider";
// import Product from "./Product";

import TopBrands from "../Components/TopBrands";
//import Brands from "../Components/Brands";

import Banner from '../assets/Banner.png'
import SingleProduct from "../Components/SingleProduct";

import ProductSlider from "../Components/Home/ProductSlider";
import HomeSlider from "../Components/HomeSlider";

const Landing = () => {

    const product = [10, 20, 30, 40, 50, 60];
    const categories = ["Category 1", "Category 2", "Category 3", "Category 3", "Category 3", "Category 3", "Category 3"];

    return (
        <div className="container mx-auto">
            
           <HomeSlider /> 

            {/* <Brands /> */}

            <div className="container pt-20">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-mediom text-2xl underline">Feature Products</h3>
                    </div>
                    {
                        categories.map((category, index) => (
                        <div key={index} className="flex items-center space-x-1 cursor-pointer">
                            <div className="border text-green  text-2l  font-medium px-3 py-1 rounded-full hover:bg-green-500 hover:text-white">
                                {category}
                            </div>
                        </div>
                        ))
                    }

                    <div className="space-x-4 lg:mt-0 mt-4">
                        <button className="btn border border-green-500 w-[120px]  rounded-full p-2 text-black hover:scale-110 hover:bg-green-500 hover:text-white">View All</button>
                    </div>
                </div>
            </div>


            <div className="flex">

                <div className="w-2/3 flex flex-wrap mx-4 mt-4">
                    {
                        product.map((product, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4">
                                <SingleProduct />
                            </div>
                        ))
                    }
                </div>
            


                 <div className="w-1/3 p-4">
                    <div className="rounded p-10">
                        <img src={Banner} alt="Ad Banner" className="w-full h-auto" />
                    </div>
                   
                </div>
            </div>

            <div className="container pt-20">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-mediom text-2xl underline">Best Products</h3>
                        </div>
                    </div>
             
            <ProductSlider/>         
            
            </div>


            <div className="container pt-6">
                <div className="container pt-20">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-mediom text-2xl underline">Top Category Products</h3>
                        </div>

                        <div className="space-x-4 lg:mt-0 mt-4">
                            <button className="btn border border-green-500 text-white rounded-lg">View All</button>
                        </div>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4">
                    {
                        product.map((el) => {
                            return (
                                <CategoryCard key={el} />
                            )
                        })
                    }

                </div>
            </div>

                <div className="container pt-20">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-mediom text-2xl underline">Best Products</h3>
                        </div>
                    </div>
             
                    <TopBrands />

            </div>
        </div>
    )
}

export default Landing;