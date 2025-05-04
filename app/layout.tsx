// app/layout.tsx
import "./globals.css";
import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Cultural Committee",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="fade-in">
          <div
            style={{
              backgroundImage: "url('/cultural-bg.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
            }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
