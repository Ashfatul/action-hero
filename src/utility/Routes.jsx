import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Error404 from "../components/Error/Error404/Error404";
import Error from "../components/Error/Error/Error";
import BlogSection from "../components/BlogSection/BlogSection";
import Home from "../pages/Home";
import AddNewProduct from "../components/AddNewProduct/AddNewProduct";
import PrivateRoute from "./PrivateRoute";
import LoggedInRedirect from "./LoggedInRedirect";
import AllToys from "../components/AllToys/AllToys";
import ToyDetails from "../components/AllToys/ToyDetails";
import MyToys from "../components/MyToys/MyToys";
import UpdateToy from "../components/MyToys/UpdateToy";
import Redirect from "./Redirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <LoggedInRedirect>
            <Login />
          </LoggedInRedirect>
        ),
      },
      {
        path: "/register",
        element: (
          <LoggedInRedirect>
            <Register />
          </LoggedInRedirect>
        ),
      },
      {
        path: "/blogs",
        element: <BlogSection />,
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "/add-new-product",
        element: (
          <Redirect>
            <AddNewProduct />
          </Redirect>
        ),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-toys/:id",
        element: (
          <Redirect>
            <MyToys />
          </Redirect>
        ),
      },
      {
        path: "/update-toy/:id",
        element: (
          <Redirect>
            <UpdateToy />
          </Redirect>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
