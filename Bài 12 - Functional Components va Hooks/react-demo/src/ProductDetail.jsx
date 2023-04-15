import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Detail - ID: {productId}</h2>
      {/* other product detail content */}
    </div>
  );
}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // your login logic here
    setIsAdmin(true);
  };

  if (!isAdmin) {
    // if user is not admin, show message and redirect to home after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 3000);

    return <div>You are not authorized to access this page.</div>;
  }

  // if user is admin, show admin content
  return (
    <div>
      <h2>Admin Page</h2>
      {/* your admin content here */}
    </div>
  );
}