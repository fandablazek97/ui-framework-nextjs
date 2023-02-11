import Layout from "@components/Layout";
import { siteConfig } from "@configs/site-config";
import { ToastProvider, ToastViewport } from "@radix-ui/react-toast";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Theme provider: https://github.com/pacocoursey/next-themes
import { ThemeProvider } from "next-themes";

// Global stylesheet
import "../styles/globals.css";

// Fonts: https://nextjs.org/docs/api-reference/next/font
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" }); // --font-display | --font-serif | --font-mono

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Disable smooth scroll on route change: https://github.com/vercel/next.js/issues/20125#issuecomment-757547865
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      document.documentElement.classList.add("!scroll-auto");
    });
    router.events.on("routeChangeComplete", () => {
      document.documentElement.classList.remove("!scroll-auto");
    });
  });

  return (
    <div id="font-provider" className={`${inter.variable} font-sans`}>
      <ThemeProvider
        attribute="class"
        enableSystem={siteConfig.theme.enableSystemTheme}
        disableTransitionOnChange={siteConfig.theme.disableTransitionOnChange}
        storageKey={`ui-theme-${siteConfig.theme.domainKey}`}
      >
        <ToastProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastViewport className="fixed left-1/2 top-28 flex w-[90%] max-w-2xl -translate-x-1/2 list-none flex-col gap-3 outline-none" />
        </ToastProvider>
      </ThemeProvider>
    </div>
  );
}
