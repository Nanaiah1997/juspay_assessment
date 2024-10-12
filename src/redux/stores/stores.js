import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../slices/slice";

const store = configureStore({
  reducer: {
    dashboardSlice: dashboardSlice.reducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }).concat(dashboardSlice.middleware),
});

export default store;
