export interface UsersState {

}

export interface Users {
    id: number; // general user id; unique identifcator  
    username: string; 
    password: string; 
    firstName: string;
    lastName: string;
    email: string;
    availability: string; // online or offline 
}

export interface Posts { 
    post: string; 
    quantity: number;

}

// Define the type of actions 
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const REMOVE_NEW_POST = 'REMOVE_NEW_POST'

interface AddNewPost {
    type: typeof ADD_NEW_POST,
    id: number
}

interface RemoveNewPost {
    type: typeof REMOVE_NEW_POST,
    id: number
}

export type PostActionTypes = AddNewPost | RemoveNewPost;