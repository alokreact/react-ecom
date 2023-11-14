import { useRef } from "react";
import { useState } from "react";
import FormRow from "../../Components/FormRow";
import icon from "../../assets/icon.png";

const Profile = () => {

    const [avatar, setAvatar] = useState(null);

    const fileInputRef = useRef(null);

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Handle the uploaded file (e.g., send it to the server, display it, etc.)
    };
    return (

        <div className="container mx-auto">

            <div className="flex h-screen">
                {/* Sidebar */}

                <div className="lg:w-1/4 md:w-1/4 bg-gray-200 p-4">
                </div>

                <div className="w-3/4 p-2">

                    <div className="border p-4">
                        <h2 className="text-xl font-normal mb-4">Account Settings</h2>
                    </div>

                    <div className="flex border sm:flex-row">
                        <div className="lg:w-2/6 md:w-full p-4 cursor-pointer" onClick={handleAvatarClick}>

                            <img src="avatar.jpg" alt="Avatar" className="w-[140px] h-[140px] rounded-full mb-4 bg-gray-200" />

                            <p className="font-semibold">Click to Change Avatar</p>

                            {/* <Fileupload classType="hidden" ref={fileInputRef}/> */}
                            <input
                                type="file"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                            />
                        </div>

                        <div className="lg:w-4/6 md:w-full p-4">
                            <form>
                                <div className="flex mb-4">
                                    <div className="w-1/2 mr-4">
                                        <FormRow label='Full Name' type="text" name="name" />
                                    </div>

                                    <div className="w-1/2 mr-4">
                                        <FormRow label='Email' type="email" name="email" />
                                    </div>
                                </div>

                                <div className="mb-4 flex">
                                    <div className="w-1/2">
                                        <FormRow label='Phone' type="text" name="phone" />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                                >
                                    Save Changes
                                </button>
                            </form>

                        </div>

                    </div>

                    <div className="w-full p-2">


                        <div className="flex">

                            <div className="w-2/6  cursor-pointer border mr-2">
                                <div className="border-b-2">
                                    <h2 className="text-basic text-black p-4">Billing Address</h2>
                                </div>

                                <div className="flex flex-col p-4">

                                    <h3 className="text-small font-semibold text-black">Stuart Reddy</h3>

                                    <div className="flex justify-start mt-1">

                                        <p className="text-basic">
                                            Sriram Nagar, Kondpaur,
                                            Near Burfi Ghar,
                                            Hyderabad, Telengana.
                                        </p>
                                    </div>


                                    <div className="flex justify-start mt-1">
                                        <h3 className="text-black font-semibold">Phone : </h3>
                                        <span className="text-basic">+91-5679090089</span>
                                    </div>


                                    <div className="flex justify-start mt-1">
                                        <h3 className="text-black font-semibold">Email : </h3>
                                        <span className="text-basic">reddy@gmail.com</span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="py-2 border mt-4 border-green-500 text-black py-2 px-4 rounded hover:bg-green-500"
                                    >

                                        Edit Address
                                    </button>

                                </div>

                            </div>

                            <div className="w-2/6 p-2 cursor-pointer border mr-2"></div>


                            <div className="w-2/6 p-2 cursor-pointer  mr-2">

                                <div className="flex justify-around center-items p-4 border" style={{ backgroundColor: '#EAF7E9' }}>

                                    <img src={icon} className="" />

                                    <span className="text-black flex font-bold justify-start">
                                        149<br />
                                        Order Pending</span>
                                </div>
                                <div className="flex justify-around center-items mt-2 p-4 border" style={{ backgroundColor: '#EAF7E9' }}>

                                    <img src={icon} className="" />

                                    <span className="text-black flex font-bold justify-start">
                                        149<br />
                                        Order Pending</span>
                                </div>

                                <div className="flex justify-around center-items p-4 mt-2 border" style={{ backgroundColor: '#EAF7E9' }}>

                                    <img src={icon} className="" />

                                    <span className="text-black flex font-bold justify-start">
                                        149<br />
                                        Order Pending</span>
                                </div>




                            </div>
                        </div>

                    </div>


                </div>






            </div>




        </div>
    )
}

export default Profile;