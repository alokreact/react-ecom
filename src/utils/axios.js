import axios from "axios";


const customFetch = axios.create({
    baseURL : 'http://localhost/restaurant/public/api/'
})

export default customFetch;