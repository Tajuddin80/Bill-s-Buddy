// src/routes/router.js

import { createBrowserRouter } from "react-router"; // Correct import
import ErrorLayout from "../Pages/ErrorPage/ErrorLayout";
import Home from "../Pages/Home/Home";
import Bills from "../Pages/BillsPage/Bills";
import ProfilePage from "../Pages/Profile/ProfilePage";
import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import Landing from "../components/Landing/Landing";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Loader from "../components/Loader/Loader";
import PaidItems from "../components/PaidItems/PaidItems";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        loader: () => fetch("/slider.json"),
        hydrateFallbackElement: <Loader />,
        element: <Landing />,
      },
    ],
  },

  {
    path: "/signin",
    element: <SignIn />,
    hydrateFallbackElement: <Loader />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    hydrateFallbackElement: <Loader />,
  },

  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loader />,
    children: [
      {
        path: "/home/:dynamic",
        loader: () => fetch("/bills.json"),
        hydrateFallbackElement: <Loader />,
        element: (
          <PrivateRoute>
            <Bills />
          </PrivateRoute>
        ),
      },
      {
        path: "/home/paid_items",
        hydrateFallbackElement: <Loader />,
        element: (
          <PrivateRoute>
            <PaidItems />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/profile",
    hydrateFallbackElement: <Loader />,
    element: (
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
    ),
  },
]);
