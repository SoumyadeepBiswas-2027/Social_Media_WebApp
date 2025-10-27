import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
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
   const[fetching ,setFetching ]= useState(false)


   useEffect(() =>{
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
         setFetching(false);
      });

      return () => {
        console.log("cleaning up UseEffect");
        controller.abort();
      }
  }, []);

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


  useEffect(() =>{
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
         setFetching(false);
      });

      return () => {
      
        controller.abort();
      }
  }, []);


  return (
      <PostList.Provider value={{ postList, addPost,fetching /*addInitialPosts*/, deletePost }}> 
      {/*we dont need addInitialPosts*/}
      {children}
    </PostList.Provider>
  );
};
