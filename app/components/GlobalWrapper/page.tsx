"use client";
import React from "react";

export default function GlobalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#e6eaee",
        display: "flex",
        justifyContent: "center",
        paddingTop: "32px",
        paddingBottom: "32px", // 🔥 SAME as top
      }}
    >
      <div
        style={{
          width: "420px", // 🔥 thoda bada
          background: "#ffffff",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          padding: "24px",
        }}
      >
        {children}
      </div>
    </div>
  );
}