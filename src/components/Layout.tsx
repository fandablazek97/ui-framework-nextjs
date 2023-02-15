import Favicon from "@components/Favicon";
import Header from "@components/unstable/Header";
import NextHead from "next/head";
import ScrollToTop from "./ScrollToTop";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Favicon />
      <NextHead>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=2.0"
        />
      </NextHead>
      <header>
        <Header />
      </header>
      <main id="content">{children}</main>
      <ScrollToTop />
    </>
  );
}
