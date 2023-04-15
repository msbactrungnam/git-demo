import React, { useState } from "react";

function TinhTongTich() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);
  const [multiply, setMultiply] = useState(0);

  const handleSum = () => {
    const tinhTong = Number(number1) + Number(number2);
    setSum(tinhTong);
  };

  const handleMultiply = () => {
    const tinhTich = Number(number1) * Number(number2);
    setMultiply(tinhTich);
  };

  return (
    <div>
      <label>
        Nhap so thu 1:
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </label>
      <label>
        Nhap so thu 2:
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </label>
      <div>
        <button onClick={handleSum}>Tinh tong:</button>
        <button onClick={handleMultiply}>Tinh tich:</button>
      </div>
      <div>
        <p>Tong cac so la: {sum}</p>
        <p>Tich cac so la: {multiply}</p>
      </div>
    </div>
  );
}

export default TinhTongTich;
