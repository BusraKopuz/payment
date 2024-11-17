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
        togglePackage: (state, action) => {
            const { selectedId, selectedAmount } = action.payload;
            const exists = state.selectedPackage.find(pkg => pkg.id === selectedId);

            const selectedPkg = state.packages.find(pkg => pkg.id === selectedId);

            const selectedName = selectedPkg ? selectedPkg.name : undefined;
            const selectedCurrency = selectedPkg ? selectedPkg.currency : undefined;

            if (exists) {
                state.selectedPackage = state.selectedPackage.filter(pkg => pkg.id !== selectedId);
                state.totalPrice -= selectedAmount;
            } else {
                state.selectedPackage.push({ id: selectedId, amount: selectedAmount,  name: selectedName, 
                    currency: selectedCurrency });
            }
            state.totalPrice += selectedAmount;
        },
        updateTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
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

export const { togglePackage, updateTotalPrice } = packageSlice.actions

export default packageSlice.reducer