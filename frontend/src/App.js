import React from "react";
import "./App.css";
import "@popperjs/core";
import "./bootstrap.min.css";
import Home from "./Pages/Home";
import HomeUser from "./Pages/HomeUser";
import Daftar from "./Pages/Daftar";
import Profile from "./Pages/Profile";
import LeaderBoard from "./Pages/LeaderBoard";
import BookSaved from "./Pages/BookSaved";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeUser" element={<HomeUser />} />
        <Route path="/register" element={<Daftar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/bookSaved" element={<BookSaved />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
