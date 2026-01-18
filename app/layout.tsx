import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasi Solar - Digital Acceleration for the Solar Revolution",
  description: "Leading EPC contractor for solar power plants (3kW-100MW) and EV charging stations (30kW-240kW) across South India. Based in Salem, Tamil Nadu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
