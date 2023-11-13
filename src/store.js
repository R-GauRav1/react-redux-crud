import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { myApi } from "./services/crudapi";

export const store = configureStore({

    reducer:{
      [ myApi.reducerPath ] : myApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
})
setupListeners(store.dispatch)