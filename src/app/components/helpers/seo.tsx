import Head from "next/head";

interface SeoProps {
  pageTitle: string;
  pageDescription: string;
}

export default function Seo({ pageTitle, pageDescription }: SeoProps) {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
    </Head>
  );
}
