import { createContext, useReducer } from "react";


export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {}
});

const PostListReducer = (currPostList, action) => {
  return currPostList;
};

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,[]);

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
