import { configureStore, combineReducers } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
