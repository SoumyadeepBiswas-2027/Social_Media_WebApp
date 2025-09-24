import { useContext, useState } from "react";
import { Post } from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { WelcomeMessage } from "./WelcomeMessage";
import { useEffect } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
export const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
 // const [DataFetched, setDataFetched] = useState(false);
 const[fetching ,setFetching ]=useState(false)


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
  
  const handleGetPostsClick = () => {
   
  };

  return (
    <>
    {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && <WelcomeMessage />}

      {!fetching && postList.map((post) => (
        <Post key={post.Id} post={post} />
      ))}
    </>
  );
};
