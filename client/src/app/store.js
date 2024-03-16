import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from '../pages/Login/authSlice'

// Configuration object for redux-persist.
// Only objects on the whitelist are stored.
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // whitelist: []
};

const rootReducer = combineReducers({
  auth: authReducer
})

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


// Configuring and creating redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

// The Redux persistor for persisting store state.
export const persistor = persistStore(store);