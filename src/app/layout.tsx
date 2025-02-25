import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiran Kandel",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
