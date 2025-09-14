import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  return currPostList;
};

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, DEFAULT_POST_LIST);

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    Id: "1",
    title: "Going to Kolkata",
    body: "Hi Friends,I am going to kolkata for Durga Pujo,Hoping to learn and enjoy a lot! Peace out",
    reaction: 2,
    userId: "user_9",
    tags: ["MaaDurga", "Learning", "FestiveMood"],
  },

    {
    Id: "2",
    title: "Working with AI",
    body: "I have been working with AI a lot attending meetings and getting depressed but enjoying a lot ",
    reaction: 5,
    userId: "user_7",
    tags: ["AI", "Learning", "NumPy"],
  },
];
