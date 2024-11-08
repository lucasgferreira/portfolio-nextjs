import Navbar from "@/components/Header/Navbar";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Gonçalves",
  description: "Software Developer",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-gray-900 text-white min-h-screen ">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        {/* <div
          className="background-animated"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #1e3c72, #2a5298, #1e3c72)",
            backgroundSize: "400% 400%",
            animation: "gradientAnimation 15s ease infinite",
            filter: "blur(10px) brightness(0.7)",
            zIndex: 0,
            position: "fixed",
          }}
        /> */}
      </body>
    </html>
  );
}
