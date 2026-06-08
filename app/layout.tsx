import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Addis Premier — Summer Sports Camp",
  description:
    "Play. Learn. Grow. Develop skills, build confidence, make memories at Addis Premier.",
  icons: {
    icon: '/logo (2).png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
