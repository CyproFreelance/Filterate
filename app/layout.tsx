import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import connect_db from "./db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filtrate",
  description:
    "This is an sexy freelancing website for video editing and clients",
};

// connect_db();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
