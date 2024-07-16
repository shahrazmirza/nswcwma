import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";

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
          <NextUIProvider>
            {children}
            <ToastContainer />
          </NextUIProvider>
        </Theme>
      </body>
    </html>
  );
}
