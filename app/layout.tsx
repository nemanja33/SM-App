import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "My Twitter Clone APp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
