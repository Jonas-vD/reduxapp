import { combineReducers, createStore, applyMiddleware } from "redux";
import news from "./news";
import songs from "./songs";
import photos from "./photos";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const rootReducer = combineReducers({
  news,
  songs,
  photos,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
