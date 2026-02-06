import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat Portafolio",
  description: "Portafolio en formato chat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
