import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cody Kuykendall CV",
  description: "Hello, I'm Cody.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
      >
        {children}

        <Footer />
      </body>
    </html>
  );
}
