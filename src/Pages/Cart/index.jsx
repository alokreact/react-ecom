import circle from '../../assets/XCircle.png';

const Cart = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex p-2 mt-4">
                    <div className="w-2/3 p-2">

                        <div className="items-center border">
                            <div className="text-black w-full p-4">
                                <h3 className="text-black">Shopping Cart</h3>
                            </div>

                            <div className="cart-table  w-full">
                                <div className="flex w-full bg-gray-100 justify-around border-b-2 p-4">
                                    <h2 className="text-black mr-2 w-[60%]">Product</h2>
                                    <h2 className="text-black mr-2 w-[10%]">Price</h2>
                                    <h2 className="text-black mr-2 w-[20%]">Quantity</h2>
                                    <h2 className="text-black mr-2 w-[10%]">Sub Total</h2>
                                </div>

                                <div className="flex justify-between p-4 items-center mt-2">

                                    <img src={circle} className="bg-cover w-6 h-6 mr-2" />

                                    <h4 className="text-black text-base w-[60%]">4K UHD LED Smart TV with Chromecast Built-in</h4>

                                    <h4 className="text-black text-base w-[10%]">$230.00</h4>

                                    <input type="text" placeholder="1" className="w-[20%] mr-2 items-center" />

                                    <h4 className="text-black text-base w-[10%]">$230.00</h4>

                                </div>


                                <div className="flex justify-between p-4 items-center mt-2 border-b-2">

                                    <img src={circle} className="bg-cover w-6 h-6 mr-2" />

                                    <h4 className="text-black text-base w-[60%]">4K UHD LED Smart TV with Chromecast Built-in</h4>

                                    <h4 className="text-black text-base w-[10%]">$230.00</h4>

                                    <input type="text" placeholder="1" className="w-[20%] mr-2 items-center" />

                                    <h4 className="text-black text-base w-[10%]">$230.00</h4>

                                </div>

                                <div className='flex justify-between p-4'>

                                    <button className='border-bg-green border text-red p-3'>
                                        RETURN TO SHOP
                                    </button>

                                    <button className='border-bg-green border text-red p-3'>
                                        UPDATE CART
                                    </button>

                                </div>


                            </div>




                        </div>
                    </div>



                    <div className="w-1/3 p-2">
                        <div className="p-3 border">
                            <div className="text-black mt-2 p-2">
                                <h2 className="text-black font-semibold text-xl">Cart Totals</h2>
                            </div>
                            <div className="flex justify-between p-2 mt-2">
                                <h4 className="text-black text-base">Tax</h4>
                                <span className="text-black text-xl">0%</span>
                            </div>

                            <div className="flex justify-between p-2 border-b-2">
                                <h4 className="text-black text-base">Sub Total</h4>
                                <span className="text-black text-xl">$234.00</span>
                            </div>

                            <div className="flex justify-between p-2 ">
                                <h4 className="text-black text-base">Total</h4>
                                <span className="text-black text-xl">$234.00</span>
                            </div>

                            <div className="flex justify-center w-full p-2 ">
                                <button className="text-black p-3 border  w-[90%] m-2
                                        border-green-400 hover:bg-green-200 hover:text-white">PROCEED CHECKOUT</button>
                            </div>
                        </div>

                        <div className="p-0 border mt-4">
                            <div className="text-black p-2 border-b-2  bg-gray-100">
                                <h2 className="text-black font-semibold text-base p-2">Coupon Code</h2>
                            </div>

                            <div className="text-black mt-2 p-4 border-b-2">
                                <input type="text" placeholder="Enter Coupon" className="w-full p-3" />
                            </div>
                            <div className="flex justify-center w-full p-2 ">
                                <button className="text-black p-3 border  w-[60%] m-2
                                        border-green-400 hover:bg-green-400 hover:text-white">APPLY COUPON</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;