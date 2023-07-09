import Head from "next/head";

export const MetaHead = ({ title }: MetaHeadProps) => {
  const headTitle = title ? `${title}::RB's Blog` : "RB's Blog";
  return (
    <Head>
      <title>{headTitle}</title>
    </Head>
  );
};

interface MetaHeadProps {
  title: string;
}
