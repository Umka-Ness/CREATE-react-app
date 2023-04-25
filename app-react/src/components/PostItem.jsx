import React from "react";
import "../styles/App.css";

export const PostItem = ({ value, ...props }) => {
  return (
    <div>
      <div className="post">
        <div>
          <strong>
            {props.post.id} {props.post.title} {value}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <button>Delete</button>
      </div>
    </div>
  );
};
