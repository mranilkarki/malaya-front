import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";


export const metadata: Metadata = {
  title: 'Malaya Globe | Connecting Nepal to the World',
  description: 'Connecting Himalayan products and journeys with global markets.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`bg-white text-slate-800 antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}