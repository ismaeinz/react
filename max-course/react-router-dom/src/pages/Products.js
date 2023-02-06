import React from "react";
import { Link } from "react-router-dom";
const PRODUCTS = [
  { id: "p1", title: "p1" },
  { id: "p2", title: "p2" },
  { id: "p3", title: "p3" },
];
const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {/* <li>
          <Link to={"/products/p1"}>P1</Link>
        </li>
        <li>
          {" "}
          <Link to={"/products/p2"}>P2</Link>
        </li>
        <li>
          {" "}
          <Link to={"/products/p3"}>P3</Link>
        </li> */}
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
