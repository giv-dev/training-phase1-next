import { CustomButton } from "@/components/main/common/CustomButton";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="p-24">
      <h1 className="text-3xl font-bold">アバウトページ</h1>
      <p className="mt-4">ここは新しく作ったページです。</p>
      <div className="mt-6">
        <Link href="/" className="text-blue-500 underline">ホームに戻る</Link>
      </div>
    </main>
  );
}