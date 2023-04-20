import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/home");
  };
  return (
    <div>
      <h1>Layout</h1>
      <nav>
        <ul>
          <li onClick={() => gotoHome()}>Home</li>
          <li>
            <Link to="/post/2">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
