import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { twMerge } from "tailwind-merge";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dark SaaS",
  description: "Dark themed SaaS landing-page built using Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge("antialiased bg-black", dm_sans.className)}>
        {children}
      </body>
    </html>
  );
}
