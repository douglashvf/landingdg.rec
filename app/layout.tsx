import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DG.rec",
  description: "Landing page DG.rec",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}