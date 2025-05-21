import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => setCount((count) => count + 1)}
      className="card h-screen w-screen flex items-center justify-center bg-gradient-to-r from-rose-100 via-pink-200 to-amber-10"
    >
      <span className="font-bold text-pink-500  w-50 h-25 flex justify-center items-center bg-gradient-to-br from-pink-200 via-rose-100 to-fuchsia-200">Radhe Radhe: {count}</span>
    </div>
  );
}

export default App;
