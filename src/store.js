import { configureStore } from "@reduxjs/toolkit";
import  loginReducer  from "./Features/LoginSlice";

import imageReducer from "./Features/ImageSlice";

const store =configureStore({

    reducer: {
        user: loginReducer,
        image:imageReducer
        // Add other reducers here if you have any
      },
})

export default store;