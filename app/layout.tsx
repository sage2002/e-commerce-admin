import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const poppins = Poppins({ subsets: ["latin"],weight : ["100","200","300","400","500","600","700","800","900"] });

export const metadata: Metadata = {
  title: "Multi-Store Admin Portal",
  description: "Manage your store activity on a single place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
