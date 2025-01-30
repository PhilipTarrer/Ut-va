// src/app/home/layout.tsx
import React from "react";

export const metadata = {
  title: "Utova - Home",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Home Layout</h2>
      {children}
    </section>
  );
}
