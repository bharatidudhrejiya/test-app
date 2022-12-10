import "./App.css";
import Post from "./Post";
import SinglePost from "./SinglePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Post />} />
            <Route path="/single-post/:id" element={<SinglePost />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
