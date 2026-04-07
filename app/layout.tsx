import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa VAE Boutique",
  description: "Vestida de gracia y estilo",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Casa VAE Boutique",
    description: "Vestida de gracia y estilo",
    url: "https://casa-vae-boutique.vercel.app",
    siteName: "Casa VAE Boutique",
    images: [
      {
        url: "/logo-casa-vae-boutique.png",
        width: 1024,
        height: 1024,
        alt: "Casa VAE Boutique",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa VAE Boutique",
    description: "Vestida de gracia y estilo",
    images: ["/logo-casa-vae-boutique.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}