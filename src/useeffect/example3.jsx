import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs whenever `count` changes
    const element = document.getElementById('countDisplay');
    if (element) {
      element.textContent = `Count is: ${count}`;
    }
  },[count]); // Dependency array: the effect runs when `count` changes

  return (
    <div>
      <p id="countDisplay">Count is: 0</p>
      <button onClick={() => setCount(count + 2)}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
