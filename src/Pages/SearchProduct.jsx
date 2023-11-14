import Breadcrumb from "../Components/BreadCrumb";
import backgroundImage from '../assets/product-bg.png'

import product1 from '../assets/logo1.jpg'
import Sidebar from '../Components/Sidebar';

const SearchProduct = () => {
    const products = [10, 20, 34, 45, 56, 65]; // Sample tags
   
    return (
        <>
            {/* <Breadcrumb /> */}
            <div className="container mx-auto">
                <div className="flex">
                    <Sidebar />
                    <div className="w-2/3 p-4">
                        <div className="w-full mb-4 text-lg font-semibold">
                            Showing  12  results
                        </div>
                        <div className="flex flex-wrap mx-2">
                            {products.map((el) => {

                                return (
                                    <div key={el} className="w-[31%] mb-4 border mx-2">
                                        <div className="border-b-2 rounded">
                                            {/* Product Image */}
                                            <img
                                                src={product1}  // Replace with actual image source

                                                className="w-full h-auto mb-2"
                                            />
                                        </div>


                                        <div className="p-4 mt-2 items-center flex justify-between">

                                            <h2 className="text-black font-medium font-semibold mb-2">Hyderabad</h2>

                                            <button className="w-[120px] btn border-green-500 text-green-500 rounded-full border px-4 py-2 rounded hover:bg-green-500 hover:text-white">
                                                Add To Cart</button>
                                        </div>

                                        <div className="p-4 mt-1 items-center bg-gray-300 flex justify-between my-1 mx-1 rounded-full">

                                            <del>₹<span>460/-</span></del>
                                            <span> ₹230/-</span>

                                            <div className="sm">50% discount </div>

                                        </div>

                                    </div>

                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchProduct;