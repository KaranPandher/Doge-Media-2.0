import { FeedActionTypes, ADD_POST_FROM_FEED, REMOVE_POST_FROM_FEED, Post } from "./types";

export function addPost(post: Post): FeedActionTypes {
    return {
      type: ADD_POST_FROM_FEED,
      payload: post
    }
  }

export function removePost(id: number): FeedActionTypes {
  return {
    type: REMOVE_POST_FROM_FEED,
    payload: id
  }
}
