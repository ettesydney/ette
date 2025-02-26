import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "ette Sydney",
  description: "ette is open at 10 Bridge St. Sydney 2000. Sign up for updates and follow us on Instagram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'antialiased'}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
