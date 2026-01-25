"use client";

import { useState } from "react";

export const SimpleForm = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-6 max-w-sm mx-auto bg-gray-50 rounded-xl shadow-md space-y-4 border border-gray-200">
      <div>
        <label className="block text-sm font-medium text-gray-700">お名前入力</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="名前を入力してね"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
        />
      </div>
      <div className="bg-white p-3 rounded border border-dashed border-blue-300">
        <p className="text-gray-600 text-sm">リアルタイムプレビュー：</p>
        <p className="text-lg font-bold text-blue-600">{text || "（未入力）"}</p>
      </div>
      <button 
        onClick={() => {
          alert(`こんにちは、${text}さん！`);
          setText(""); // 入力をリセット
        }}
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        送信（アラート）
      </button>
    </div>
  );
};