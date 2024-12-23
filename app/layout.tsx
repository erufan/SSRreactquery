import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/context/QueryProvider";

export const metadata: Metadata = {
  title: "Create Next App for psp express",
  description: "developed by Erfan Taheri for code interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
