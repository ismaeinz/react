import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetailPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      {
        path: "products/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      {/* <h1>279</h1> */}
      <RouterProvider router={Routes}></RouterProvider>
    </>
  );
};

export default App;
