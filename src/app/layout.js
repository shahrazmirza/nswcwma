import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NSW Central West Muslim Association (NSWCWMA)",
  description: "Public Benevolent Institute",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <NextUIProvider>{children}</NextUIProvider>
        </Theme>
      </body>
    </html>
  );
}
