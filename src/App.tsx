import React from "react";
import "./assets/styles/main.scss";
import routes from "./routes/router";
import { RouterProvider } from "react-router";

const App: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
