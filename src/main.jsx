import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import ChampionsPage from "./screens/ChampionsPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import DbPicker from "./screens/DbPicker"; // 👈
import "./index.css";

const router = createBrowserRouter([
  { path: "/db", element: <DbPicker /> }, // 👈 nueva
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <ChampionsPage />
      </ProtectedRoute>
    ),
  },
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
