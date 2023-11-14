import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../utils/axios";
import { addUsertoLocalStorage, getUserFormLocalstorage } from "../utils/localStorage";

const initialState={
    user:getUserFormLocalstorage(),
    isLoading:false
}

export const loginUser = createAsyncThunk('user/loginUser', 
        async (user,thnkAPI) =>{
        try{
            const resp = await customFetch.post('user/login', user)
            return resp.data;
        }
        catch(error){
            console.log(error)
        }
    }
)

const loginSlice = createSlice({

    name:'login',
    initialState,

    extraReducers:(builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(loginUser.fulfilled, (state,action) => {
            state.isLoading = false
            const user = action.payload.data.user;
            state.user = user;
            addUsertoLocalStorage(user)
            console.log(user)
          })
          .addCase(loginUser.rejected, (state,action) => {
            state.isLoading = false
            console.log(action)
          })
    }     
})

export default loginSlice.reducer;
