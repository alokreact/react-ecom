import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fileupload from "../../../Components/FileUpload";
import FormRow from "../../../Components/FormRow";
import { uploadImage } from "../../../Features/ImageSlice";

import { Spinner } from 'flowbite-react';

const initialState = {
    name: '',
    price: '',
    image: '',
    description: ''
}

const AddProduct = () => {

    const [values, setValues] = useState(initialState);

    const { imageUrl, isLoading } = useSelector((store) => store.image);

    const dispatch = useDispatch();
    console.log('imageUrl', imageUrl)

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setValues({ ...values, [name]: value })
    }
    const handleFileSelect = (file) => {
        //console.log('file', file)
        const formData = new FormData();
        formData.append('image', file);

        // Dispatch the action to upload the image
        //dispatch(uploadImage(formData));
        dispatch(uploadImage(formData));
        //setValues({ ...values,[image]:imageUrl })
    }


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        console.log(imageUrl)
        //const { name, price, description } = values;
    }

    return (
        <div className="container mx-auto flex">
            <div className="w-1/4 p-4">
                Siedebar
                <div className="h-screen px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800 w-128">
                    <h2 className="text-lg font-semibold mb-4">Menu</h2>
                    <ul className="space-y-2 font-medium">
                        <li className="text-gray-700 hover:text-black cursor-pointer">

                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ml-3">Dashboard</span>
                            </a>
                        </li>


                        <li className="text-gray-700 hover:text-black cursor-pointer">Orders</li>
                        <li className="text-gray-700 hover:text-black cursor-pointer">Logout</li>
                        {/* Add more menu items as needed */}
                    </ul>
                </div>
            </div>

            <div className="w-3/4 p-4">
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>

                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>

                        <htmlForm action="#" className="space-y-8">

                            <FormRow name='name' type='text' label='Name' handleChange={handleChange} />

                            <FormRow name='price' type='text' label='Price' handleChange={handleChange} />

                            <Fileupload onFileSelect={handleFileSelect} />
                            
                            {isLoading?
                                <Spinner  aria-label="Success spinner example" color="success"/>:''}


                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>

                                <textarea id="description" name="description" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Description..." onChange={(e) => handleChange(e)}></textarea>
                            </div>

                            <button type="button" onClick={(e) => onSubmit(e)} className="py-3 px-5 text-sm font-medium 
                            text-center rounded-lg bg-success-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Save Product</button>

                        </htmlForm>
                    </div>
                </section>
            </div>
        </div>


    )

}

export default AddProduct;