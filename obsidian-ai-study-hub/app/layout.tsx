import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Study Hub",
  description: "Import, organize, and study AI-generated content",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
            <Navbar />
            <main className="flex-1 overflow-y-auto p-4 lg:p-6">
              <div className="max-w-7xl mx-auto animate-fade-in">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
