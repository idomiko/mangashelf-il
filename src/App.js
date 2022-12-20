import { React } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import QnA from "./Pages/QnA";
import Team from "./Pages/Team";
import Collective from "./Pages/Collective";
import Root from "./Components/Root";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/qna",
        element: <QnA />,
      },
      {
        path: "/collective",
        element: <Collective />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
