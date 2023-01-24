import React from "react";
import Header from "./Header";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}

export default LayoutWrapper;
