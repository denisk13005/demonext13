import "../styles/globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="flex">
        <Sidebar />
        <main className="pl-5 max-w-7xl w-full mx-auto overflow-y-auto">
          <Header />

          {children}
        </main>
      </body>
    </html>
  );
}
