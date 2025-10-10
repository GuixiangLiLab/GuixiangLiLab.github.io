import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import "./globals.css";
import "./style.css";
import "./index.css";

import { roboto, redRose } from "./fonts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BootstrapClient from "./components/BootstrapClient";

export const metadata: Metadata = {
  title: "Guixiang Li Lab",
  description: "Personal website and blog of Guixiang Li",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${redRose.variable}`}>
      <body>
         {/* 让 Bootstrap JS/WOW 在客户端生效 */}
        <BootstrapClient />
        
        {/* 顶部导航区*/}
        <Header />

        {/* 页面主体 */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
