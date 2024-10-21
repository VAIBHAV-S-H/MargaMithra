import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'mapbox-gl/dist/mapbox-gl.css'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MargaMithra - Dynamic Route Optimization",
  description: "Efficient delivery management and route optimization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
