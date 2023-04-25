import { useRef, useState } from "react";
import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Java", body: "Description" },
    { id: 3, title: "C++", body: "Description" },
    { id: 4, title: "C", body: "Description" },
    { id: 5, title: "C#", body: "Description" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState();

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
    console.log(newPost);
  };
  return (
    <div className="App">
      <form>
        {/* <input ref={bodyInputRef} type="text" /> */}
        <MyInput
          type="text"
          placeholder="Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <MyInput
          type="text"
          placeholder="Description"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="I must do it" />
    </div>
  );
}

export default App;
