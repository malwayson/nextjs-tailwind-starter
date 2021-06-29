import React from "react";
import Header from "../inc/Header";
import Footer from "../inc/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
