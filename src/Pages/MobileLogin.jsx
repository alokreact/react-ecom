import FormRow from "../Components/FormRow"

const MobileLogin = () => {

    return (
        <>

            <div className="conatiner">

                <div className="flex flex-col lg:w-[35%] md:w-full p-4 shadow-lg mx-auto mt-4">

                    <div className="mt-2 border p-4">
                        <h4 className="text-xl text-green font-semibold text-center">LOGIN</h4>
                    </div>

                    <div className="lg:w-full md:w-full p-4">
                        <form>
                            <div className="flex mb-4">
                                <div className="w-full mr-4 p-4">
                                    <FormRow label='Phone' type="text" name="phone" />
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <div className="w-full mr-4 flex flex-around">
                                    <button className="border w-full p-3  border-green-500 text-base text-black hover:bg-green-400 hover:text-white">

                                        Log In

                                    </button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )

}

export default MobileLogin