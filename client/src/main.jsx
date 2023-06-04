import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import CreatePost from "./CreatePost.jsx"
import Posts from "./Posts.jsx"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/create/post" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
