import { createSlice } from "@reduxjs/toolkit";

const state = {
  orders: [],
  isLoading: true,
  order: null,
  isFetchingOrder: true,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState: state,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setIsFetchingOrder: (state, action) => {
      state.isFetchingOrder = action.payload;
    },
  },
});

export const { setOrders, setLoading, setOrder, setIsFetchingOrder } = ordersSlice.actions;
