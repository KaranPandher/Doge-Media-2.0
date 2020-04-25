export interface Post {
    id: number,
    name: string
}

export interface FeedState {
    posts: Post[]
}

// Action "names"  or types.
export const ADD_POST_FROM_FEED = 'ADD_POST_FROM_FEED';
export const REMOVE_POST_FROM_FEED = 'REMOVE_POST_FROM_FEED';

interface AddPostFromFeed {
    type: typeof ADD_POST_FROM_FEED
}

interface RemovePostFromFeed {
    type: typeof REMOVE_POST_FROM_FEED
}