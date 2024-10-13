import { createBrowserRouter } from "react-router-dom";
import CommonLayout from "./../layouts/CommonLayout/CommonLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "@/pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
