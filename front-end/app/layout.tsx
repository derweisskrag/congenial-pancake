import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// import the providers

import { Providers } from "./providers";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";


export const metadata: Metadata = {
  title: "Бургер Чедар",
  description: "Burgers Store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
      <body className={`${inter.className}`}>
      <Providers>
          {/* render layout components such as Navigation */}
          <NavBar/>
          <main className={"flex-grow-0"}>{children}</main>
          <Footer />
      </Providers>
      </body>
    </html>
  );
}
