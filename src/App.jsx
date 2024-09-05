import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer";
import { NavBar } from "./components/NavBar";
import { NotFound } from "./view/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <>Homepage</>,
        },
        {
          path: "/products",
          element: <>products</>,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  function Root() {
    return (
      <div className="root-container">
        <NavBar />
        <div className="outlet">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
