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
    path: "/mangashelf-il/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/mangashelf-il/home",
        element: <Home />,
      },
      {
        path: "/mangashelf-il/projects",
        element: <Projects />,
      },
      {
        path: "/mangashelf-il/team",
        element: <Team />,
      },
      {
        path: "/mangashelf-il/qna",
        element: <QnA />,
      },
      {
        path: "/mangashelf-il/collective",
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
