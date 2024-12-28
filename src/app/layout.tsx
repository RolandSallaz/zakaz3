import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: "MasterCard Bridge",
  description: "Иностранная банковская карта удаленно для России Visa и Mastercard. Для путешествий, сервисов и перевода денег",
  keywords: 'иностранная карта, купить иностранную карту, открыть иностранную карту, карта для пополнения стим, зарубежная карта'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap')`}
        </style>
      </Head>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
