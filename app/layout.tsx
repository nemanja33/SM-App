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
  title: "SM app",
  description: "A SM app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${notoSans.className}`}>
        <Header />
        <Toast>
          <main>{children}</main>
        </Toast>
      </body>
    </html>
  );
}
