import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lacrete Concept Limited",
  description: "Top building and construction company.",
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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <BootstrapClient />
        <ToastContainer position="top-center" />
        <Footer />
      </body>
    </html>
  );
}

