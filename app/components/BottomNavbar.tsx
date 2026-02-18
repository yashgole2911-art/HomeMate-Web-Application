"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavbar() {
  const pathname = usePathname();

  const navStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "calc(100% - 20px)",
    maxWidth: "420px",
    background: "#ffffff",
    borderTop: "1px solid #e5e5e5",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "12px 0",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
    zIndex: 1000,
  };

  const linkStyle = (active: boolean): React.CSSProperties => ({
    fontSize: "22px",
    textDecoration: "none",
    color: active ? "#2563eb" : "gray",
  });

  return (
    <nav style={navStyle}>
      <Link href="/dashboard" style={linkStyle(pathname === "/dashboard")}>🏠</Link>
      <Link href="/helpers_profile" style={linkStyle(pathname === "/helpers_profile")}>📋</Link>
      <Link href="/personal_details" style={linkStyle(pathname === "/personal_details")}>➕</Link>
      <Link href="/setting" style={linkStyle(pathname === "/setting")}>⚙️</Link>
      <Link href="/profile" style={linkStyle(pathname === "/profile")}>👤</Link>
    </nav>
  );
}