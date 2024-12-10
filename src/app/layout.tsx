import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "%s | Al-hikmoh",
  description: "Knowledge is Power",
  openGraph: {
    title: "Al-hikmoh - Knowledge is Power",
    description:
      "The best montessori academy in Osun state. Nigeria's winning montessori academy",
    images: [
      {
        url: "../public/sch.png",
        width: 1200,
        height: 630,
        alt: "Knowledge is power.",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
