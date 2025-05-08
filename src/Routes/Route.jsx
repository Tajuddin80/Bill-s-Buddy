// import { createBrowserRouter } from "react-router";
// import ErrorLayout from "../Pages/ErrorPage/ErrorLayout";
// import Home from "../Pages/Home/Home";
// import Bills from "../Pages/BillsPage/Bills";
// import Profile from "../Pages/Profile/ProfilePage";
// import LandingLayout from "../layouts/LandingLayout/LandingLayout";
// import Landing from "../components/Landing/Landing";
// import SignUp from "../Pages/SignUp/SignUp";
// import SignIn from "../Pages/SignIn/SignIn";
// import Loader from "../components/Loader/Loader";
// import PaidItems from "../components/PaidItems/PaidItems";
// import ProfilePage from "../Pages/Profile/ProfilePage";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: LandingLayout,
//     errorElement: <ErrorLayout></ErrorLayout>,
//     children: [
//       {
//         index: true,
//         loader: () => fetch("/slider.json"),
//         hydrateFallbackElement: <Loader></Loader>,
//         element: <Landing></Landing>,
//       },
//     ],
//   },

//   {
//     path: "/signin",
//     Component: SignIn,
//   },
//   {
//     path: "/signup",
//     Component: SignUp,
//   },

//   {
//     path: "/home",
//     Component: Home,
//     hydrateFallbackElement: <Loader></Loader>,
//     children: [
//       {
//         path: "/home/:dynamic",
//         Component: Bills,
//         hydrateFallbackElement: <Loader></Loader>,
//         loader: () => fetch("/bills.json"),
//       },
//       {
//         path: "/home/paid_items",
//         Component: PaidItems,
//       },

//     ],
//   },
//   {
//     path: "/profile",
//     Component: ProfilePage,
//   },
// ]);


import { createBrowserRouter } from "react-router";
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
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/home/:dynamic",
        element: (
          <PrivateRoute>
            <Bills />
          </PrivateRoute>
        ),
        loader: () => fetch("/bills.json"),
      },
      {
        path: "/home/paid_items",
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
    element: (
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
    ),
  },
]);

