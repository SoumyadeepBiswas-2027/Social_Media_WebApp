import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import { CreatePost, createPostAction } from "./components/CreatePost.jsx";
import { PostListProvider } from "./store/post-list-store.jsx";
import { PostList, postLoader } from "./components/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostListProvider>
      <RouterProvider router={router} />
    </PostListProvider>
  </StrictMode>
);
