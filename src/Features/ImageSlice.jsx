
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import customFetch from "../utils/axios"

const initialState = {

    isLoading: false,
    imageUrl: '',
}

export const uploadImage = createAsyncThunk('image/upload',
    async (data, thnkAPI) => {

        console.log('data', data)
        try {
            const result = await customFetch.post('upload/image', data)
            return result
        }
        catch (error) {
            
            console.log(error)
        }
    }
)
const imageSlice = createSlice({

    name: 'image',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(uploadImage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(uploadImage.fulfilled, (state, action) => {
                state.isLoading = false;
                
                state.imageUrl = action.payload.data.image;
                console.log(action)
            })

            .addCase(uploadImage.rejected, (state, action) => {
                state.isLoading = false;
                //state.imageUrl = action.payload.data.image;
                console.log(action)
            })
    }

})

export default imageSlice.reducer;

