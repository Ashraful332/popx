import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";


export const metadata: Metadata = {
  title: "Profile",
  description: "Popx Account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
         {children}
      </body>
    </html>
  );
}
