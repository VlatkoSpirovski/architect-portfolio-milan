import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Milan Milojevic Architecture",
    template: "%s | Milan Milojevic Architecture",
  },
  description:
    "Bilingual architecture portfolio presenting residential projects, design process, and contact details for Milan Milojevic.",
  keywords: [
    "architect",
    "residential architecture",
    "interior architecture",
    "Milan Milojevic",
    "Skopje",
    "Belgrade",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
