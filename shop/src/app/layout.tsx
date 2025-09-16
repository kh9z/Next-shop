import "./globals.css";
import Menubar from "@/components/layout/menubar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <header className="px-24 py-5">
          <Menubar />
        </header>
        <main className="px-24 py-5">{children}</main>
      </body>
    </html>
  );
}
