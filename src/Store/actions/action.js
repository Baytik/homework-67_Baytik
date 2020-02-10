/*
import axiosAPI from "../../axiosAPI";

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FetchPostsSuccess = (posts) => ({type: FETCH_POSTS_SUCCESS, posts});

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await axiosAPI.get();
        console.log(response.data)
        dispatch(FetchPostsSuccess(response.data));
    }
};*/
