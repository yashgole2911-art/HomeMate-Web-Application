import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomeMate",
  description: "Home management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}