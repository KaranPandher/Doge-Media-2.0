export interface Post {
    id: number,
    posted: string | number
}

export interface FeedState {
    posts: Post[]
}

// These are your actions
export const ADD_POST_FROM_FEED = 'ADD_POST_FROM_FEED';
export const REMOVE_POST_FROM_FEED = 'REMOVE_POST_FROM_FEED';

// These are the action requirements
interface AddPostFromFeed {
    type: typeof ADD_POST_FROM_FEED
    payload: Post // This will add a new post to the store. 
}

interface RemovePostFromFeed {
    type: typeof REMOVE_POST_FROM_FEED
    payload: number // This should match the post Id. 
}

export type FeedActionTypes = AddPostFromFeed | RemovePostFromFeed;