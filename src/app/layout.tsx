import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/data/context/AppContext";

export const metadata: Metadata = {
  title: "Template Admin",
  description: "Template para Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
