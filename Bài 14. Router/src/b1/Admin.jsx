import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (useName) => {
    const useAdmin = "";
    if (useName == useAdmin) setIsAdmin(true);
  };

  if (!isAdmin) {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    return <p>Bạn không có quyền truy cập</p>;
  } else navigate("/admin");
  return (
    <div>
      <h1>Admin</h1>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default Admin;
