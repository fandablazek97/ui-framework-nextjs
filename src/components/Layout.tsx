import Favicon from "@components/Favicon";
import Navbar from "@components/unstable/Navbar";
import Head from "./Head";
import ScrollToTop from "./ScrollToTop";
// import CookieConsent from "./unstable/CookieConsent";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* <CookieConsent /> */}
      <Head />
      <Favicon />
      <header>
        <Navbar />
      </header>
      <main id="content">{children}</main>
      <ScrollToTop />
      {/* <Footer /> */}
    </>
  );
}
