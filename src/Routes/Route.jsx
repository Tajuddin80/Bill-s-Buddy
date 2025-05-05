import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: ErrorPage,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
    ],
  },
]);
