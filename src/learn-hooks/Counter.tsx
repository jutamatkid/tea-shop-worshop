import { useState } from "react";

let count = 0;
function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>count: {count}</p>
      <button
        onClick={() => {
          setCount(c => c + 1)
          console.log(count);
        }}
      >
        increase count
      </button>
    </div>
  );
}

export default Counter;
