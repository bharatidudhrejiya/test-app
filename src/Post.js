import React, { useEffect, useState } from "react";
import { URL } from "./URL";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Post.css";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(URL + "/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  console.log(posts);
  return (
    <>
      <div className="main-container">
        <h1>Posts</h1>
        {posts.map((post) => {
          return (
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <div className="button-container">
                  <Button variant="primary">Edit</Button>
                  <Button variant="primary">Delete</Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Post;
