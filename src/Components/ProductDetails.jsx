import Breadcrumb from "./BreadCrumb";
import ReviewStar from "./Product/ReviewStar";
import shoppingCart from "../assets/ShoppingCart.svg";
import WishList from "../assets/Wishlist.png";

const ProductDetails = () => {

    return (
        <>
            <Breadcrumb />
            <div className="container mx-auto mt-4">

                <div className="flex flex-wrap">

                    <div className="w-1/2">
                        <img src="product-image.jpg" alt="Product Image" className="w-full h-auto" />
                    </div>



                    <div className="w-1/2 px-8">

                        <div className="mt-4 p-2 border-b-2">

                            <ReviewStar rating={3} />
                            <div className="flex mt-4 p-2">
                                <div className="w-1/2 flex">
                                    <h2>Availabilty:</h2>In Stock
                                </div>

                                <div className="w-1/2 flex">
                                    <h2>Sku:</h2>A123289
                                </div>

                                <div className="w-1/2 flex">
                                    <h2>Category:</h2>Electronics
                                </div>
                            </div>

                            <div className="flex mt-4 p-2">
                                <div className="w-1/2 flex">
                                    <h2 className="text-blue-500 text-xl font-semibold p-2">$1699</h2>
                                    <del className="text-gray text-xs font-semibold p-4">$1999</del>
                                    <button className="text-black text-basic border p-3 bg-yellow-400">20% Off</button>
                                </div>

                            </div>

                        </div>


                        <div className="flex mt-4 p-2">
                            <div className="w-full flex justify-between">
                                <button className="flex-grow flex justify-center items-center border border-yellow-400 bg-yellow-400 text-xs font-bold text-white p-4 mr-8">ADD TO CART

                                    <img src={shoppingCart} className="ml-1" />
                                </button>

                                <button className="border border-yellow-400 text-xs font-bold text-yellow-400 p-3 mr-10">BUY NOW</button>

                                <button className="border border-yellow-400 text-xs font-bold text-yellow-400 p-3 mr-4">BUY NOW</button>

                            </div>

                        </div>

                        <div className="flex mt-4 p-2 border-b-2 mb-3 p-4">
                            <div className="w-full flex">

                                <img src={WishList} /> <span>Add To Wishlist </span>


                            </div>

                            <div className="w-full flex">



                                Share Product:

                            </div>

                        </div>


                        <h1 className="text-2xl font-semibold mb-4">Product Name</h1>

                        <p className="text-gray-700 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
                            rhoncus ut eleifend nibh porttitor.
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Product Description</h2>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                        Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus
                        rhoncus ut eleifend nibh porttitor.
                    </p>
                </div>
            </div>
        </>
    )
}
export default ProductDetails;