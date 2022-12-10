import React, { useEffect, useState } from "react";
import { URL } from "./URL";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./Post.css";

const Post = (props) => {
  const [posts, setPosts] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    fetch(URL + "/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  const handleEditPost = (postId) => {
    fetch(URL + "/posts/" + postId, { method: "PUT" })
      .then((res) => res.json())
      .then((posts) => {
        // post edited
      });
  };

  const handleDeletePostConfirmation = (postId) => {
    setPostId(postId);
    setShowPopUp(true);
  };

  const handleDeletePost = () => {
    fetch(URL + "/posts/" + postId, { method: "DELETE" })
      .then((res) => res.json())
      .then((posts) => {
        setShowPopUp(false);
        setPostId(null);
      });
  };

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
                  <Button variant="primary">
                    <Link to={"/single-post/" + post.id}>View</Link>
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleEditPost(post.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleDeletePostConfirmation(post.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={showPopUp}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>You sure you wanna delete?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowPopUp(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleDeletePost}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Post;
