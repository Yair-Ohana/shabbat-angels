import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";

import Home from "./containers/Home";
import Donate from "./containers/Donate";
import Contact from "./containers/Contact";
import About from "./containers/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  return (
    <>
      <Header />

      <main className="h-full w-full">
        <RouterProvider router={router} />
      </main>
    </>
  );
};

export default App;
