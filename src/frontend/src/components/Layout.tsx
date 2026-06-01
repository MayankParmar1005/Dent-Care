import type { ReactNode } from "react";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16 lg:pt-18">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
