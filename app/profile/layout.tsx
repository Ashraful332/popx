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
    <div style={{fontFamily:"Rubik"}}>
      {children}
    </div>
  );
}
