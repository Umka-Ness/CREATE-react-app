import { useState } from "react";
import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList";

function App() {
  const [posts, usePosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Java", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
  ]);
  return (
    <div className="App">
      <PostList posts={posts} title="Post Title" />
    </div>
  );
}

export default App;
