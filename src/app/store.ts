import { configureStore, combineReducers} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

// configure the redux-persist storage in the browser, in this case localStorage
const persistConfig = {
    key: 'root',
    storage
}

// combine reducers which can alse be done in configureStore reducer object
const rootReducers = combineReducers({
    auth: authReducer
})

// persist reducers
const persistedReducers = persistReducer(persistConfig, rootReducers);


export const store = configureStore({
    reducer: persistedReducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk] // without this line we get this error 'a non-serializable value was detected in the state'
});

// export dispatch type and state type
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// persistStore function that we pass the store, persits and rehydrates redux state
export const perisistor = persistStore(store);