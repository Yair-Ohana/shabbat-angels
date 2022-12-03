import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

const App = () => {
  return (
    <>
      <Header />

      <main className="bg-third h-full w-full">
        <RouterProvider router={router} />
      </main>
    </>
  );
};

export default App;
