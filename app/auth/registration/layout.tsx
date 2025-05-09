import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";


export const metadata: Metadata = {
  title: "PopX Registration",
  description: "Popx Account Registration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{fontFamily:"Rubik"}}>
      {children}
    </div>
  );
}
