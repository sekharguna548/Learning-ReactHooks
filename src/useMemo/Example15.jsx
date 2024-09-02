import React, { useState, useMemo } from "react";

function SquareCalculator() {
  const [number, setNumber] = useState(0);

  // useMemo will only recompute if 'number' changes
  const squaredNumber = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h1>Square Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Squared Number: {squaredNumber}</p>
    </div>
  );
}

export default SquareCalculator;
