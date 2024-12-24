import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/context/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Link from "next/link";
import { IoIosHome, IoMdSettings } from "react-icons/io";

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
      <body className="bg-[#F5F9FC]">
        <ReactQueryProvider>
          <SmallNav />
          <DesktopNav />
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}

function DesktopNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-[#FFFFFF] sm:block">
      <nav className="h-full">
        <ul className="flex flex-col items-center gap-4 px-2 sm:py-5 h-full justify-between">
          <li>
            <Link href="/">
              <IoIosHome size={30} />
            </Link>
          </li>

          <li>
            <Link href={"/seting"}>
              <IoMdSettings size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

function SmallNav() {
  return (
    <header className="z-10 border-b bg-[#FFFFFF] sm:hidden w-screen">
      <nav className="w-full">
        <ul className="flex items-center px-5 pt-8 gap-4 w-full justify-between">
          <li>
            <Link href="/">
              <IoIosHome size={30} />
            </Link>
          </li>

          <li>
            <Link href={"/seting"}>
              <IoMdSettings size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
