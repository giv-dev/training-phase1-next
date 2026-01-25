import { Suspense } from "react";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { UserList } from "@/components/common/UserList";

export default async function UsersPage() {
    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold mb-6">ユーザー一覧</h1>
            {/* データの準備ができるまで LoadingSpinner を表示 */}
            <Suspense fallback={<LoadingSpinner />}>
                <UserList />
            </Suspense>
        </main>
    );
}