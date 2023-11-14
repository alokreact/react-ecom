import { useState } from 'react';
import cart from '../../assets/cart.png';
import user from '../../assets/User.png';
import logo from '../../assets/ClickOn.png';

const Search = () => {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setisSidebarOpen(!isSidebarOpen);
    }
    return (
        <>
            <div className="flex items-center justify-between p-4 bg-green-300 text-white">
                <div className="hidden md:flex items-center space-x-4 ">
                    <img src={logo} alt="Logo" className="w-44 h-12" />
                </div>

                <div className="flex-grow mx-4 items-center flex justify-center ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-[50%]  p-3 text-center border border-green-400 shadow-md rounded bg-white rounded-full  text-black focus:outline-none"
                    />
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <div className="relative flex">
                        <img src={cart} className="w-6 h-6" />
                        <h4 className='text-basic font-bold text-white p-1'>Cart </h4>
                    </div>

                    <div className="flex">
                        <a href="/mobilelogin"><img src={user} /></a>
                        <h4 className='text-basic font-bold text-white p-1'>Sign in/Register </h4>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 text-white p-4">
                {/* Mobile Sidebar Menu (Hidden on Desktop) */}
                <div className="md:hidden">
                    {/* Mobile Menu Button (opens sidebar) */}
                    <button className="text-xl" onClick={toggleSidebar}>
                        ☰
                    </button>

                    {/* Sidebar (shown when the menu button is clicked) */}
                    {isSidebarOpen && (
                        <div className="fixed inset-0 bg-gray-200 bg-opacity-0 z-50">
                            {/* Sidebar Content */}
                            <div className="bg-gray-300 flex flex-col w-64 h-full py-4 p-4">
                                <button className="text-xl flex justify-end" onClick={toggleSidebar}>
                                    ☰
                                </button>


                                <ul className="space-y-2 p-3 text-xl text-black">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    {/* ...more menu items */}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* Desktop Flexbox Menu (Hidden on Mobile) */}
                <div className="hidden md:flex items-center space-x-4 text-base font-semibold text-black">
                    <a href="/">Home</a>
                    <a href="/register">Register</a>
                    <a href="/mobilelogin">Login</a>
                    <a href="/product">Products</a>
                    <a href='/cart'>Cart</a>

                    {/* ...more menu items */}
                </div>
            </div>
        </>
    )
}
export default Search;