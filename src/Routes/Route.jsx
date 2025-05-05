
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

import Bills from "../Pages/BillsPage/Bills";
import Profile from "../Pages/Profile/Profile";
import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import Landing from "../components/Landing/Landing";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingLayout,
    errorElement: ErrorPage,
    children: [
      {
        index: true,
        Component: Landing,
      },
      {
        path: "/home",
        Component: Home,
      },
     
      {
        path: "/bills",
        Component: Bills,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
    
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
]);
