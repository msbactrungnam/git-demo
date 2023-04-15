import React, { useState, useEffect } from "react";

function BayGioLaMayGio() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Thoi gian hien tai: {time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default BayGioLaMayGio;
