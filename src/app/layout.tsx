import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata:Metadata = {
  title: "Al-hikmoh - Knowledge is Power",
  description:
    "Nigeria's winning montessori academy",
  openGraph: {
    title: "Al-hikmoh - Knowledge is Power",
    description:
      "The best montessori academy in Osun state. ",
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
