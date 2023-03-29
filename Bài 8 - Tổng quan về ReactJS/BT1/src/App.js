import './App.css';

function Check(x){
  if(x) {
    return (
      <h1>Hello User</h1>
    );
  } else return (
    <h1>Login Now</h1>
  );
}
function App() {
  const isUserLoggedIn = true;
  // const isUserLoggedIn = false;
  return Check(isUserLoggedIn);
}
export default App;
