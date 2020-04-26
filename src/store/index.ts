import { combineReducers, createStore } from "redux";
import { feedReducer } from "./newsfeed/reducers";

// This will combine the reducers.
const rootReducer = combineReducers({
  feed: feedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// THIS TINY BIT OF CODE IS THE ENTIRE STORE!!!
export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
