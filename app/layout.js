import React from "react";
import NavBar, { Footer } from "./Components/components";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="Body">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
