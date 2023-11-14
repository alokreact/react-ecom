import Breadcrumb from "../Components/BreadCrumb";
import backgroundImage from '../assets/product-bg.png'

import product1 from '../assets/product1.png'
import Sidebar from '../Components/Sidebar';

const ProductListing = () => {
    const products = [10, 20, 34, 45, 56, 65]; // Sample tags

    return (
        <>
            <Breadcrumb />

            <div className="organList flex bg-gray-600">
            </div>

            <div className="container mx-auto">
                <div className="flex">

                    <Sidebar />

                    <div className="flex  flex-wrap justify-between p-4 3/4">
                        {/* Product Card 1 */}

                        <div className="w-full mb-4 text-lg font-semibold">
                            Showing  12  results
                        </div>
                        <div className="flex flex-wrap mb-4">
                            {products.map((el) => {

                                return (
                                    <div className="w-1/4 flex flex-col items-center hover:scale-110" key={el}>

                                        <div className="product-bg bg-cover  p-5" style={{ backgroundImage: `url(${backgroundImage})` }}>

                                            <img src={product1} className="w-56 h-56 object-cover" />
                                        </div>

                                        <div className="p-4 mt-2 items-center flex flex-col">
                                            <h2 className="text-black font-medium font-semibold mb-2">Product 1</h2>

                                            <button className="w-[120px] btn border-green-500 text-green-500 rounded-full border px-4 py-2 rounded hover:bg-green-500 hover:text-white">View</button>
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


export default ProductListing;