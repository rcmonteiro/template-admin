import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/data/context/AppContext";
import { AuthProvider } from "@/data/context/AuthContext";
import { Suspense } from "react";
import Loading from "./loading";

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
        <Suspense fallback={<Loading/>}>
          <AuthProvider>
            <AppProvider>
              {children}
            </AppProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
