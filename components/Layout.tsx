import { type ReactNode } from "react";
import { Header } from "./Header";
import { MetaHead } from "./MetaHead";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <main className="container">
      <MetaHead title={title} />
      <Navigation />
      <Header title={title} />
      <section className="container">{children}</section>
      <Footer />
    </main>
  );
};

interface LayoutProps {
  title: string;
  children: ReactNode;
}
