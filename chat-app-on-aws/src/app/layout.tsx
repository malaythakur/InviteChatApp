import type { Metadata } from "next";
import "./globals.css";
import ContextProvider from "@/components/context";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
  description: "Quick Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          {children}
        </ContextProvider>

      </body>
    </html>
  );
}
