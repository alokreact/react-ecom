
import food1 from '../assets/food.png'
//import food3 from '../assets/food3.png'

const SingleProduct = () => {
    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-lg mb-4">            
                        
            <a href="/product-details" className='flex justify-center'>
                <img className="p-8 rounded-t-lg w-[60%] items-center" src={food1} alt="product image"/>
            </a>
            
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-base font-semibold tracking-tight text-gray-700 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a href="#" className="text-white bg-blue-600 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium  text-sm p-4 text-center">Add to cart</a>
                </div>
            </div>
        
        </div>

    )
}
export default SingleProduct;