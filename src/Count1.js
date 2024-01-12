import { useState, useEffect } from 'react';

function Count1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Button tapped ${count} times`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        <h1>Click {count} times</h1>
      </button>
    </div>
  );
}

export default Count1;
