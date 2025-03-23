import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cody Kuykendall",
  description: "Hello, I'm Cody.",
  icons: {
    icon: "/favicon.ico",
  },
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
