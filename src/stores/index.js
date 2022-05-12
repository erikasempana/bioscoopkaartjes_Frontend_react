import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reduser";

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage //define which storage to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware, logger));

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };
