import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { URL } from "./URL";

const SinglePost = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    console.log("post");
    fetch(URL + "/posts/" + id)
      .then((res) => res.json())
      .then((post) => {
        console.log(post);
        setPost(post);
      });
  }, [id]);

  return (
    <>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default SinglePost;
