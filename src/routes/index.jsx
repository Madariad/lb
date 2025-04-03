// routes.js
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../page/index";
import Home from "../page/Dashboard/index";
import Module from "../page/Modules/index";
import Modules from "../page/Modules/modules";
import Details from "../page/Modules/details";
import ErrorPage from "../page/ErrorPage";

import One from "../page/Modules/one";
import Two from "../page/Modules/two";
import Three from "../page/Modules/three";
import Four from "../page/Modules/four";

const routes = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <h1>Main</h1>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <h1>Main</h1>,
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "modules",
    element: <Module />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Modules />,
        errorElement: <ErrorPage />,
      },
      {
        path: "1",
        element: <One />,
        errorElement: <ErrorPage />,
      },
      {
        path: "2",
        element: <Two />,
        errorElement: <ErrorPage />,
      },
      {
        path: "3",
        element: <Three />,
        errorElement: <ErrorPage />,
      },
      {
        path: "4",
        element: <Four />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];

const Router = createBrowserRouter(routes);
export default Router;
