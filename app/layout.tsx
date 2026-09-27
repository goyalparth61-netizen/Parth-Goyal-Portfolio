import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parth Goyal | Cybersecurity × Full-Stack × AI",
  description:
    "Portfolio of Parth Goyal — a cybersecurity student exploring secure systems, full-stack development, AI, and networking.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
