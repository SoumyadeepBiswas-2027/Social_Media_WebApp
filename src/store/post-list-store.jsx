import  { createContext, useReducer } from "react";
import { PostList } from "../components/PostList";

const PostList = createContext({
  PostList: [],
  addPost: () =>{},
  deletePost: () =>{},
});

export const PostListProvider = ({children})=>{
  const [PostList,dispatchPostList] = useReducer()
  
  return <PostList.Provider value={
    PostList
  }>{children}</PostList.Provider>
};