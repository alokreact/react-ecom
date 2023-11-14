import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";

const initialState = {
    isLoading: false,
    product: [],
}

export const addProduct = createAsyncThunk('add/Product',
    async (data, thunkAPi) => {
        try {
            const resp = await customFetch.post('save/product', data)
            return resp;
        }
        catch (error) {
            console.log(error)
        }
    })

 export const getProducts = createAsyncThunk ('get/products', 
 
        async()=>{

            try{

                const resp = await customFetch.get('get/products')
                return resp
            }

            catch (error){

                console.log(error)
            }
        }
    )   

const addProductSlice = createSlice({

    name: 'Product',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.isLoading = false;
            })

            .addCase(addProduct.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(addProduct.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getProducts.pending, (state)=>{
                state.isLoading= true
            })
            .addCase(getProducts.fulfilled, (state)=>{
                state.isLoading= false
            })
    }

})


export default addProductSlice.reducer;