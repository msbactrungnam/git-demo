function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };
  return (
    <div>
      <h1>Log in</h1>
      <button onClick={handleClick}>Log in</button>
    </div>
  );
}

export default Login;
