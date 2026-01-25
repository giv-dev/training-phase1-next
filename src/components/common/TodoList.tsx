"use client";

import { useState } from "react";

export const TodoList = () => {
    const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        if (!inputValue) return;
        const newTodo = { id: Date.now(), text: inputValue };
        setTodos([...todos, newTodo]); // スプレッド構文で配列を新しく作る
        setInputValue("");
    };

    const deleteTodo = (id: number) => {
        // 指定したID以外のものを残す（＝削除）
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-800">TODOリスト</h2>

            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-1 text-black"
                    placeholder="タスクを入力..."
                    onKeyDown={(e) => e.key === "Enter" && addTodo()}
                />
                <button disabled={!inputValue} onClick={addTodo} className={`${inputValue ? "" : "opacity-50"} bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700`}>追加</button>
            </div>

            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center bg-gray-50 p-3 rounded border border-gray-100">
                        <span className="text-gray-700">{todo.text}</span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="text-red-500 hover:text-red-700 text-sm font-semibold"
                        >
                            削除
                        </button>
                    </li>
                ))}
            </ul>
            {todos.length === 0 && <p className="text-center text-gray-400 text-sm mt-4">タスクはありません</p>}
        </div>
    );
};