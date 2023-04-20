import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const handleClick = () => {
    const navigate = useNavigate();
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Home;
