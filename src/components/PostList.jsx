import { useContext } from "react";
import { Post } from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { WelcomeMessage } from "./WelcomeMessage";
import { useEffect } from "react";
export const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
 // const [DataFetched, setDataFetched] = useState(false);

  useEffect(() =>{
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []);
  

  const handleGetPostsClick = () => {
   
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
