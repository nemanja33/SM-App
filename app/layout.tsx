import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/variables.css";
import Header from "@/components/layout/header/header";
import Toast from "@/components/ui/toast/toast";

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
        <Toast>
          <main>{children}</main>
        </Toast>
      </body>
    </html>
  );
}
