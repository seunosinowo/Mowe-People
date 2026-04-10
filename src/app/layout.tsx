import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata = {
  title: "Mowe Global",
  description: "A modern web application built with Next.js and shadcn/ui",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
