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
      <p>Thoi gian hien tai: {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default BayGioLaMayGio;
