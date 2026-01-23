import { CustomButton } from "@/components/main/common/CustomButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">部品の共通化</h1>
      <div className="mt-8">
        <CustomButton label="クリックしてね" color="pink" />
      </div>
      <div className="mt-6">
        <Link href="/about" className="text-blue-500 underline">アバウトに移動</Link>
      </div>
    </main>
  );
}
