import {
  FeedState,
  ADD_POST_FROM_FEED,
  REMOVE_POST_FROM_FEED,
  FeedActionTypes,
} from "./types";

// This is the initial state
const initialState: FeedState = {
  posts: [
    {
      id: 1,
      posted: "TEST TEST TEST 123",
    },
  ],
};

// This set up the reducer
export function feedReducer(state = initialState, action: FeedActionTypes) {
  switch (action.type) {
    case ADD_POST_FROM_FEED:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST_FROM_FEED:
      return {
        ...state,
        posts: state.posts.filter((posts) => posts.id !== action.payload),
      };
    default:
      return state;
  }
}
