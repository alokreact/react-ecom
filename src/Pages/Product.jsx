// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
//import Breadcrumb from "../Components/BreadCrumb";
import Sidebar from "../Components/Sidebar";
import SingleProduct from "../Components/SingleProduct";
//import { getProducts } from "../Features/AddProduct";

const Product = () => {
  const product = [10, 20, 30, 40, 50, 60];

  return (
    <div className="container mx-auto">
      
      <div className="flex flex-wrap justify-center mt-0">
        <div className="w-1/4 flex">
             <Sidebar />
        </div>

        <div className="w-3/4 flex flex-wrap">
        {
          product.map((el) => {
            return (
                <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4   p-4" key={el}>
                    <SingleProduct />
                </div>
            )
          })
        }
        </div>
      </div>
    </div >
  )
}

export default Product;