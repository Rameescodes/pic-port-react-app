import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
// import {serialize} from '@reduxjs/toolkit';
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "adminAuth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serialize)
});

export const persistor = persistStore(store);
    