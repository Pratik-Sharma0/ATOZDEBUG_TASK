import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import laneReducer from '../features/lanes/lanesSlice';
import { redditApi } from '../features/api/redditApi';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, laneReducer);

const store = configureStore({
    reducer: {
        lanes: persistedReducer,
        [redditApi.reducerPath]: redditApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(redditApi.middleware),
});

const persistor = persistStore(store);

export { store, persistor };
