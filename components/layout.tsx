import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";

type Props = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props) => {
  return (
    <>
      <Header />
      <main className={cn("container mx-auto px-4", className)}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
