import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { getSiteData } from "@/sanity/lib/getSiteData";
import StaticFooter from "./components/staticFooter";
import { NavProvider } from "./context/navContext";

export async function generateMetadata(): Promise<Metadata> {
  const siteData = await getSiteData();

  return {
    title: siteData?.metaTitle || "ette sydney",
    description: siteData?.metaDescription || "ette is open at 10 Bridge St. Sydney 2000. Sign up for updates and follow us on Instagram.",
  };
}

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
        <NavProvider>
          <Header siteData={siteData} />
          {children}
          <Footer siteData={siteData} />
          <StaticFooter siteData={siteData}/>
        </NavProvider>
      </body>
    </html>
  );
}
