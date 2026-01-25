"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white text-center">
      <p className="text-2xl font-bold mb-4">カウント: {count}</p>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          増やす
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          減らす
        </button>
      </div>
    </div>
  );
};