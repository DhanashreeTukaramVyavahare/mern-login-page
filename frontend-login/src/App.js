import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; // Import Navigate
import Login from "./Login";
import Register from "./Register";

const router = createBrowserRouter(
  [
    { path: "/", element: <Navigate to="/login" /> }, // Redirect root to /login
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
