import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyForm from "./myForm.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyForm />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
