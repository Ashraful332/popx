import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Providers } from '@/redux/Provider'
import { Toaster } from "react-hot-toast";




export const metadata: Metadata = {
  title: "PopX",
  description: "Popx Account",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body >
        <Providers >
          <Theme>
            <Toaster position="top-center" />
            <div style={{fontFamily:"Rubik"}}>
              {children}
            </div>
            
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
