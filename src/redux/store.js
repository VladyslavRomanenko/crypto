import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { coinsReducer } from "./slice";

const persistConfig = {
  key: "coins",
  storage,
  whitelist: ["token"],
};

const coinsPersistedReducer = persistReducer(persistConfig, coinsReducer);

export const store = configureStore({
  reducer: {
    coins: coinsPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
