import { AdminHeader } from "@/components/common/AdminHeader";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AdminHeader />
        {children}
      </body>
    </html>
  );
}
