// データの型定義
type User = {
    id: number;
    name: string;
    email: string;
};

export const UserList = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3秒待機
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("データが取れませんでした");
    const users = await response.json();
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user: any) => (
                <li key={user.id} className="p-4 border rounded shadow hover:bg-gray-50 bg-white">
                    <h2 className="font-bold text-black">{user.name}</h2>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                </li>
            ))}
        </ul>
    )
}