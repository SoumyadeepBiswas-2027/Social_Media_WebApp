import { useContext, useState } from "react";
import { Post } from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { WelcomeMessage } from "./WelcomeMessage";
export const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [DataFetched, setDataFetched] = useState(false);

  if (!DataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFetched(true);
  }

  const handleGetPostsClick = () => {
    // fetch("https://dummyjson.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     addInitialPosts(data.posts);
    //   });
  };

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}

      {postList.map((post) => (
        <Post key={post.Id} post={post} />
      ))}
    </>
  );
};
