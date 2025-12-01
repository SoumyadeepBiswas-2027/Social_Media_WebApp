import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Sidebar from "../components/Sidebar.jsx";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { PostListProvider } from "../store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>

        <div className="content">
          <Header></Header>
          {/* {selectedTab === "Home" ? (<PostList></PostList> ) : (<CreatePost></CreatePost>)} */}
          <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
} 
export default App;
