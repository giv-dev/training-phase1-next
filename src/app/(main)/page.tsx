import { CustomButton } from "@/components/common/CustomButton";
import { Counter } from "@/components/common/Counter";
import { SimpleForm } from "@/components/common/SimpleForm";
import { TodoList } from "@/components/common/TodoList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">部品の共通化</h1>
      <div className="mt-8">
        <CustomButton label="クリックしてね" color="pink" />
      </div>
      <div className="mt-8"><Counter /></div>
      <div className="mt-8"><SimpleForm /></div>
      <div className="mt-8"><TodoList /></div>
    </main>
  );
}
