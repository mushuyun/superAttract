import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const middlewares = [thunk];

// when deployed, people can not see logger state change. The logger only works locally
if(process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware (...middlewares));

const persistor = persistStore(store);

export { store, persistor };