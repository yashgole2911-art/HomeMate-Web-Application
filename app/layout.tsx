import type { Metadata } from "next";
import "./globals.css";
import GlobalWrapper from "./components/GlobalWrapper/page";

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
        <GlobalWrapper>
          {children}
        </GlobalWrapper>
      </body>
    </html>
  );
}