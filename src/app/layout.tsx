import "./globals.css";
import React from "react";

export const metadata = {
  title: "Clazzy AI",
  description: "Nunca mais escreva sozinho.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
