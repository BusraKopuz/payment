import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    user: {
        fullName: "",
        email: ""
    },
    isLogin: false,
}

export const fetchUser = createAsyncThunk("fetchUser", async() => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
})

const BASE_URL = "https://62f9ee323c4f110faa8ed350.mockapi.io/api/packages"


export const loginSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser : () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isLogin = true
        })
    }

})

export const { logoutUser } = loginSlice.actions

export default loginSlice.reducer