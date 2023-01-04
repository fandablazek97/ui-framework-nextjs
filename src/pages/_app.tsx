import Layout from "@components/Layout";
import { ToastProvider, ToastViewport } from "@radix-ui/react-toast";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "focus-visible";

// Global stylesheet
import "../styles/globals.css";

// Fonts: https://nextjs.org/docs/api-reference/next/font
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
// Prepared variables for future use are:
// --font-display
// --font-serif
// --font-mono

export default function App({ Component, pageProps }: AppProps) {
  // Disable smooth scroll on route change: https://github.com/vercel/next.js/issues/20125#issuecomment-757547865
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      document.documentElement.classList.add("!scroll-auto");
    });
    router.events.on("routeChangeComplete", () => {
      document.documentElement.classList.remove("!scroll-auto");
    });
  });

  return (
    <div id="view" className={`${inter.variable} h-full font-sans`}>
      <ToastProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastViewport className="fixed right-[4vw] top-28 m-0 flex w-96 max-w-[100vw] list-none flex-col gap-3 outline-none" />
      </ToastProvider>
    </div>
  );
}
