import React from "react";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <header>
        <h3>Header</h3>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}

export default LayoutWrapper;
