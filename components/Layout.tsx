import { type ReactNode } from "react";
import { Header } from "./Header";
import { MetaHead } from "./MetaHead";

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <MetaHead title={title} />
      <Header title={title} />
      <main className="max-w-xl w-full flex items-center flex-col justify-start max-h-fit space-y-2 my-5 mx-auto">
        {children}
      </main>
    </>
  );
};

interface LayoutProps {
  title: string;
  children: ReactNode;
}
