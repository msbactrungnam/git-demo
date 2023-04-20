import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/product/${e}`);
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <p id="1">Sản phẩm 1</p>
        <button
          onClick={(e) => {
            handleClick(1);
          }}
        >
          Chi tiết sản phẩm
        </button>
      </div>
      <div>
        <p id="2">Sản phẩm 2</p>
        <button
          onClick={(e) => {
            handleClick(2);
          }}
        >
          Chi tiết sản phẩm
        </button>
      </div>
    </div>
  );
}

export default Home;
