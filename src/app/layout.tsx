import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// UI Provider
import { ChakraUIProviders } from "./ChakraUIProviders";

// Global Components
import Nav from "@/components/global/nav";
import Footer from "@/components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Working Labs",
  description: "Working Labs - Herramienta de generacion de ofertas laborales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ChakraUIProviders>
          <Nav />
          {children}
          <Footer />
        </ChakraUIProviders>
      </body>
    </html>
  );
}
