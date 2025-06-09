import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
