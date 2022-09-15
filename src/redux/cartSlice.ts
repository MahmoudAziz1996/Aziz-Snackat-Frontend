import {createSlice} from '@reduxjs/toolkit';
import {useCartHelpers} from '../lib/helpers/useCartHelpers';
import {CartState} from './types';

const initialState: CartState = {
  totalAmount: 0,
  totalCount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isFound = state.items?.find(item => item.id == action.payload.id);
      if (!!isFound) {
        state.items = state.items?.map(item => {
          if (item.id === action.payload.id) {
            return {...item, qty: item.qty!! + 1};
          }
          return {...item};
        });
      } else {
        state.items = [...state?.items, {...action.payload, qty: 1}];
      }
      [state.totalCount, state.totalAmount] = useCartHelpers(state.items);
    },
    removeFromCart: (state, action) => {
      const quantity = action.payload.qty;
      if (quantity > 1) {
        state.items = state.items.map(item => {
          if (item.id === action.payload.id) {
            return {...item, qty: item.qty!! - 1};
          }
          return {...item};
        });
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
      [state.totalCount, state.totalAmount] = useCartHelpers(state.items);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      [state.totalCount, state.totalAmount] = useCartHelpers(state.items);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const {addToCart, removeFromCart, removeProduct, clearCart} =
  cartSlice.actions;
export default cartSlice.reducer;
