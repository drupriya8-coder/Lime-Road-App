// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Contact from "./pages/contact";
import "./index.css";   // 👈 sabse zaroori line (Tailwind yahin se load hota hai)
import { Toaster } from "react-hot-toast";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ProfileUpdate from "./pages/ProfileUpdate";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/userprofile" element={<ProfileUpdate />} />
      </Routes>


      {/* ✅ Toaster yaha add kiya */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />

    </BrowserRouter>
  </React.StrictMode>
);
