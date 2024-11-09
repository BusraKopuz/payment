import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    totalPrice: 0,
    packages: [],
    selectedPackage: [],
    loading: false
}

const BASE_URL = "https://62f9ee323c4f110faa8ed350.mockapi.io/api/packages"

export const getAllProducts = createAsyncThunk("getAllProducts", async() => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data; 
})

export const packageSlice = createSlice({
    name: "packages",
    initialState,
    reducers: {
        updateTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        addToSelectedPackage: (state, action) => {
            state.selectedPackage.push(action.payload);
            state.totalPrice += action.payload.amount; 
        },
        removeFromSelectedPackage: (state, action) => {
            state.selectedPackage = state.selectedPackage.filter(pkg => pkg.id !== action.payload.id);
            state.totalPrice -= action.payload.amount; 
        }

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.packages = action.payload;

        })
    }
})

export const { updateTotalPrice, addToSelectedPackage, removeFromSelectedPackage } = packageSlice.actions

export default packageSlice.reducer