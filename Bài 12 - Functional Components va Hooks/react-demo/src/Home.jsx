import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate("/product/:productId");
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        <li>
          <button onClick={() => handleProductClick(1)}>Product 1</button>
        </li>
        <li>
          <button onClick={() => handleProductClick(2)}>Product 2</button>
        </li>
        {/* other products */}
      </ul>
    </div>
  );
}
