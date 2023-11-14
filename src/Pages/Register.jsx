import FormRow from "../Components/FormRow";

import ArrowRight from '../assets/ArrowRight.png';
const Register = () => {
    return (
        <>
            <div className="conatiner">
                <div className="flex flex-col lg:w-[32%] md:w-full p-4 shadow-lg mx-auto mt-4">

                    <div className="mt-2 border p-4">
                        <h4 className="text-xl text-green font-semibold text-center">Register</h4>
                    </div>

                    <div className="lg:w-full md:w-full p-4">
                        <form>
                            <div className="flex mb-4">
                                <div className="w-full mr-4">
                                    <FormRow label='Name' type="text" name="name" />
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <div className="w-full mr-4">
                                    <FormRow label='Email' type="text" name="email" />
                                </div>
                            </div>

                            <div className="flex mb-4 mt-3">
                                <div className="w-full mr-4">
                                    <FormRow label='Phone' type="text" name="phone" />
                                </div>
                            </div>

                            <div className="flex justify-between mt-4">
                                <div className="w-full mr-4">

                                    <input type="checkbox" name="check" className="mr-2" />
                                    <span>Are you agree to  Terms of Condition and Privacy Policy.</span>

                                </div>
                            </div>


                            <div className="flex mt-4">
                                <div className="w-full mr-4 flex flex-around">
                                    <button className="border w-full p-3  border-green-500 text-base text-black hover:bg-green-400 hover:text-white">
                                        Register
                                    </button>

                                    <img src={ArrowRight} className=""/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;