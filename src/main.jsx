import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import ChampionsPage from "./screens/ChampionsPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./index.css";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ChampionsPage />
      </ProtectedRoute>
    ),
  },
  // alias más explícito
  {
    path: "/campeones",
    element: (
      <ProtectedRoute>
        <ChampionsPage />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
