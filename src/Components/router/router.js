import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../Pages/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
export default router;
