import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer";
import { NavBar } from "./components/NavBar";
import { NotFound } from "./view/NotFound";
import { Products } from "./view/Products";
import { CounterRedux } from "./view/CounterRedux";
import { Cart } from "./view/Cart";
import { HomePage } from "./view/HomePage";
import { ProductDetail } from "./view/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <ProductDetail />,
        },
        {
          path: "/counter-redux",
          element: <CounterRedux />,
        },
        {
          path: "/mon-panier",
          element: <Cart />,
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
