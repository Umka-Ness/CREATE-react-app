import { useRef, useState } from "react";
import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { MyInput } from "./components/UI/input/MyInput";
import { UiGame } from "./components/UiGame";

function App() {
  // const [posts, setPosts] = useState([
  //   { id: 1, title: "JavaScript", body: "Description" },
  //   { id: 2, title: "Java", body: "Description" },
  //   { id: 3, title: "C++", body: "Description" },
  //   { id: 4, title: "C", body: "Description" },
  //   { id: 5, title: "C#", body: "Description" },
  // ]);

  // const [post, setPost] = useState({ title: "", body: "" });

  // function addNewPost(e) {
  //   e.preventDefault();

  //   setPosts([...posts, { ...post, id: Date.now() }]);
  //   setPost({ title: "", body: "" });
  // }

  return (
    <div className="App">
      <UiGame />
      {/* <form>
        <input ref={bodyInputRef} type="text" />
        <MyInput
          type="text"
          placeholder="Name"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Description"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="I must do it" /> */}
    </div>
  );
}

export default App;
