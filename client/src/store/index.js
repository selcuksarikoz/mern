import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

import RootReducer from "./combineReducers"

const configureStore = (preloadState) => {
	const middlewares = [thunk]

	if (process.env.NODE_ENV === "development") {
		middlewares.push(createLogger())
	}

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const composed = [(applyMiddleware(...middlewares))];

	const store = createStore(RootReducer, preloadState, composeEnhancers(...composed));

	return store;
}

export default configureStore