import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <div>
      <h1>Home</h1>
      <p>
        Go to <Link to={"/products"}> The List Of products</Link>
      </p>
      <button onClick={navigateHandler}>navigate</button>
    </div>
  );
};

export default Home;
