import React from "react";
import ReactDOM from "react-dom/client";
// import Ap p from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Route/Route";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>
);
