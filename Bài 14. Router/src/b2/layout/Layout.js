import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 
    if (!isLoggedIn) {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
        return <p>Bạn chưa đăng nhập</p>;
    } else {
      navigate("/");
    }
  }, []);

  return <Outlet />;
}

export default Layout;
