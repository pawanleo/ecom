import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
  products: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
 
});

// Action creators are generated for each case reducer function
export const { addToCart } = counterSlice.actions;

export default counterSlice.reducer;
