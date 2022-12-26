import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login";
import Pick from "./pages/Pick";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pick" element={<Pick />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
