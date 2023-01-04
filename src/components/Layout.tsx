import Favicon from "@components/Favicon";
import Navbar from "@components/Navbar";
import CookieConsent from "./CookieConsent";
import Head from "./Head";
import ScrollToTop from "./ScrollToTop";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head />
      <Favicon />
      <CookieConsent />
      <header>
        <Navbar />
      </header>
      <main id="content">{children}</main>
      <ScrollToTop />
      {/* <Footer /> */}
    </>
  );
}
