import { contactsReducer } from "./sliceContacts"
import { filterReducer } from "./sliceFilter";

import storage from 'redux-persist/lib/storage' 
import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
  key: 'contacts',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, contactsReducer)
 
export const store = configureStore({
    reducer: {
    filter: filterReducer,
    contacts: persistedReducer,
},
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})
export const persistor = persistStore(store)