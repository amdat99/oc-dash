import Sidebar from "@/components/sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Sample page",
  description: "Example page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar pageTitle="Sample page" />
        <div className="d-flex">
          <Sidebar selectedItem="dashboard" />
          {children}
        </div>
      </body>
    </html>
  );
}
