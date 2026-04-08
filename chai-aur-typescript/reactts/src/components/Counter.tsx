import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number | null>(0);
  return (
    <div>
      <p>Cups ordered: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Order one more</button>
    </div>
  );
}
