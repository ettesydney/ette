import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { getSiteData } from "@/sanity/lib/getSiteData";

export const metadata: Metadata = {
  title: "ette Sydney",
  description: "ette is open at 10 Bridge St. Sydney 2000. Sign up for updates and follow us on Instagram.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch site data at build time (static) or revalidate periodically
  const siteData = await getSiteData();

  return (
    <html lang="en">
      <body className={'antialiased site-bg'}>
        {/* Pass siteData as props */}
        <Header siteData={siteData} />
        {children}
        <Footer siteData={siteData} />
      </body>
    </html>
  );
}
