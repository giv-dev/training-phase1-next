import Link from "next/link";

export const AdminHeader = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Admin</h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:text-gray-300">Home</Link>
      </nav>
    </header>
  );
};