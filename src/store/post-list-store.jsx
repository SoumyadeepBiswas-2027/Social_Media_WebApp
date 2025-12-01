import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  // addInitialPosts: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.Id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POST"){
    newPostList = action.payload.posts;
  }
  return newPostList;
};

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []); //removed DEFAULT_POST_LIST


  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload:post,
    });
  };


   const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };


  return (
      <PostList.Provider value={{ postList, addPost, deletePost }}> 
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;