import { configureStore } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { contactsReducer } from '../redux/contacts/slice'; 
import { filterReducer } from '../redux/filters/slice'; 
import { authReducer } from '../redux/auth/slise'; 

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};



export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

});


export const persistor = persistStore(store);
export default store;