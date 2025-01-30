// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers/SessionProvider";

export const metadata: Metadata = {
  title: "Utova",
  description: "Welcome to Utova",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black min-h-screen flex items-center justify-center">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
