import localFont from "next/font/local";
import "./globals.css";
import { COIN_NAME, COIN_TICKER } from "./config/coin";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/**
 META DATA PARTS
 <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="fav/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="fav/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="fav/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="fav/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="fav/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="fav/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="fav/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="fav/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="fav/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="fav/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="fav/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="fav/favicon-16x16.png"
        />
        <link rel="manifest" href="fav/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
 */

export const metadata = {
  title: `${COIN_NAME} - ${COIN_TICKER}`,
  description: `The official website of ${COIN_NAME} - ${COIN_TICKER}`,
  // NOW FOR THE FAV IMGES

  icons: {
    icon: [
      { url: "/fav/apple-icon-57x57.png" },
      { url: "/fav/apple-icon-60x60.png" },
      { url: "/fav/apple-icon-72x72.png" },
      { url: "/fav/apple-icon-76x76.png" },
      { url: "/fav/apple-icon-114x114.png" },
      { url: "/fav/apple-icon-120x120.png" },
      { url: "/fav/apple-icon-144x144.png" },
      { url: "/fav/apple-icon-152x152.png" },
      { url: "/fav/apple-icon-180x180.png" },
    ],
    shortcut: ["icon", "apple-touch-icon"],
    apple: [{ url: "/fav/apple-icon-57x57.png" }],
    other: [
      {
        rel: "icon",
        url: "/fav/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
