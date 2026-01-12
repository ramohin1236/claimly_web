
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query";
import authApi from './feature/authApi/authApi'
import insurerApi from './feature/insurerapi/insurerapi';
import myProfileApi from './feature/myProfileApi/myProfileApi';


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [insurerApi.reducerPath]: insurerApi.reducer,
    [myProfileApi.reducerPath]: myProfileApi.reducer,
   
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
        authApi.middleware,
        insurerApi.middleware,
        myProfileApi.middleware
    )
})

setupListeners(store.dispatch);

// Types (IMPORTANT)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


