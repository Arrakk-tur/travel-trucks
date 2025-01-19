import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./slices/campersSlice";
import favoritesReducer from "./slices/favoritesSlice";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
  },
});

export default store;
