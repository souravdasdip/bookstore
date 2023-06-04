import { configureStore } from '@reduxjs/toolkit';
import {
  booksDetailReducers
} from './features';
import { cartDetailReducers } from './features/cartDetail';


export const store = configureStore({
  reducer: {
    booksDetail: booksDetailReducers,
    cartDetail: cartDetailReducers
  }
});

export const appDispatch = store.dispatch;