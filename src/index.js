import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Home from "./routes/Home";
import DiceRoller from "./routes/DiceRoller";
import CharacterBuilder from "./routes/CharacterBuilder";
import ErrorPage from "./routes/ErrorPage";

// Configuring Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "dice",
        element: <DiceRoller />,
      },
      {
        path: "char",
        element: <CharacterBuilder />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Letting the React know about the routes */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
