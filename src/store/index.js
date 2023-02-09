import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import themeReducer from "../slices/themeSlice";
import userReducer from "../slices/userSlice.js"

const persistConfig = {
    key: 'storage',
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    theme: themeReducer,
    checkUser: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer
});

export default store;
export const persistor = persistStore(store);
