import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
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
      payload: {post,
      },
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
    <PostList.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     Id: "1",
//     title: "Going to Kolkata",
//     body: "Hi Friends,I am going to kolkata for Durga Pujo,Hoping to learn and enjoy a lot! Peace out",
//     reaction: 2,
//     userId: "user_9",
//     tags: ["MaaDurga", "Learning", "FestiveMood"],
//   },

//     {
//     Id: "2",
//     title: "Working with AI",
//     body: "I have been working with AI a lot attending meetings and getting depressed but enjoying a lot ",
//     reaction: 5,
//     userId: "user_7",
//     tags: ["AI", "Learning", "NumPy"],
//   },
// ];
