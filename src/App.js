import React from "react";
import { RouterProvider } from "react-router-dom";
import "./main.scss";

import router from "./Components/router/router";
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
