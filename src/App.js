import React from "react";
import { RouterProvider } from "react-router-dom";
import "./main.scss";

import router from "./Components/router/router";
function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
