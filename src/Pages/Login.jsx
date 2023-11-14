import { useState } from 'react';
import { useDispatch } from 'react-redux';
import image1 from '../assets/image-1.jpg';
import { loginUser } from '../Features/LoginSlice';


const Login = () => {

    const [values, setValue] = useState([]);
    const dispatch = useDispatch();
    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setValue({ ...values, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault;
        const { email, password } = values;
        dispatch(loginUser({ email: email, password: password }));
    }
    return (

        <div className="container mx-auto flex">
            <div className="w-1/2 p-4 mr-4">
                <img className="rounded-t-lg w-full h-auto" src={image1} alt="image" />
            </div>

            <div className="w-1/2 p-4 ml-4">
                <div className="container mx-auto">
                    <div className="flex  w-full items-center">
                        <div className="bg-white w-full p-8 shadow-lg">

                            <form className='form-submit'>

                                <div className="mb-12">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                        <input type="text" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5  dark:text-white "
                                            placeholder="John"
                                            required name='email' onChange={(e) => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                    <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                                        placeholder="john.doe@company.com" name='password' required onChange={(e) => handleChange(e)} />
                                </div>

                                <button type="button" onClick={(e) => onSubmit(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex w-screen justify-center items-center">

                </div>

            </div>
        </div>
    )
}
export default Login;