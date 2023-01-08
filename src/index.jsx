import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Post from "./pages/Post";
import ContactUs from "./pages/ContactUs";
import Team from "./pages/Team";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/blogs/:slug" element={<Post />} /> */}
      <Route path="/events/:slug" element={<Post />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/team" element={<Team />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
