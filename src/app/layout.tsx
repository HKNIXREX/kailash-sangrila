import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import AnnouncementBar from "@/components/AnnouncementBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kailash Sangrila - Adikailash, Omparvat & Kailash Yatra | Explore the Unexplored",
  description: "Experience divine pilgrimage tours to Adikailash, Omparvat, and Kailash with Kailash Sangrila. Expert guided tours through the magnificent Himalayas starting from Rs. 10,800.",
  keywords: "Adikailash Yatra, Omparvat Tour, Kailash Darshan, Himalayan Pilgrimage, Kumaon Darshan, Uttarakhand Tours, Spiritual Journey",
  authors: [{ name: "Kailash Sangrila" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Kailash Sangrila - Adikailash, Omparvat & Kailash Yatra",
    description: "Experience divine pilgrimage tours to Adikailash and Omparvat with expert guidance.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-black">
        <ScrollProgress />
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
