import { combineReducers, createStore } from "redux";
import { feedReducer } from "./newsfeed/reducers";

const rootReducer = combineReducers({
  feed: feedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
