import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My Project</h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/admin" className="hover:text-gray-300">Admin</Link>
      </nav>
    </header>
  );
};