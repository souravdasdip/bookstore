// redux store for profile detail
import { createSlice } from '@reduxjs/toolkit';

const name = 'cartDetail';

const initialState = {
    cartDetail: [],
};

const cartDetailSlice = createSlice({
    name,
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartDetail = [...state.cartDetail, action.payload];
        },
        removeToCart: (state, action) => {
            const indexToDelete = state.cartDetail.findIndex(item => item.id === action.payload.id)
            if (indexToDelete !== -1) {
                state.cartDetail.splice(indexToDelete, 1);
            }
        }
    }
});

export const cartDetailActions = cartDetailSlice.actions;
export const cartDetailReducers = cartDetailSlice.reducer;