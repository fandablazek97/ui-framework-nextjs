import Container from "@components/Container";
import Link from "@components/Link";
import ThemeSwitch from "@components/ThemeSwitch";
import { Logo } from "@components/unstable/Logo";
import { contact, routes, socials } from "@configs/navigation";
import clsx from "clsx";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// ToDo
// - Rewrite styling to be more pretty and easier to customize

function DesktopNavLink({ href, label }: { href: string; label: string }) {
  const router = useRouter();
  const matches = router.pathname === href;
  return (
    <Link
      href={href}
      hoverEffect="scale-up"
      className={clsx(
        "text-sm",
        matches ? "text-primary" : "text-gray-800 dark:text-white"
      )}
    >
      {label}
    </Link>
  );
}

function TouchNavLink({
  href,
  label,
  i,
}: {
  href: string;
  label: string;
  i: number;
}) {
  const router = useRouter();
  const matches = router.pathname === href;
  return (
    <li
      className={clsx(
        "font-sans text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl",
        matches ? "text-primary" : "text-gray-800 dark:text-white"
      )}
    >
      <Link href={href} hoverEffect="scale-up">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.4 + i * 0.1,
              ease: "easeOut",
            },
          }}
          className="block"
        >
          {label}
        </motion.span>
      </Link>
    </li>
  );
}

function BurgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      aria-label="Otevřít / zavřít menu"
      className={clsx(
        "z-offcanvas-above group relative flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full"
      )}
      onClick={onClick}
    >
      <span
        className={clsx(
          "ease-out-back h-0.5 w-6 origin-center transform-gpu rounded-full bg-gray-900 transition duration-300 group-hover:bg-white dark:bg-white dark:group-hover:bg-gray-900",
          isOpen && "translate-y-[4px] -rotate-45"
        )}
      />
      <span
        className={clsx(
          "ease-out-back h-0.5 w-6 origin-center transform-gpu rounded-full bg-gray-900 transition duration-300 group-hover:bg-white dark:bg-white dark:group-hover:bg-gray-900",
          isOpen && "-translate-y-[4px] rotate-45"
        )}
      />
      <span
        className={clsx(
          "ease-out-back absolute inset-0 -z-10 h-full w-full scale-75 rounded-full bg-gray-900 opacity-0 transition duration-300 group-hover:scale-110 group-hover:opacity-100 dark:bg-white"
        )}
      ></span>
    </button>
  );
}

function TouchMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Prevents scrolling when menu is open
  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add(
        "overflow-hidden",
        "relative",
        "h-full",
        "touch-none"
      );
    } else {
      document.body.classList.remove(
        "overflow-hidden",
        "relative",
        "h-full",
        "touch-none"
      );
    }
  }, [isOpen, setIsOpen]);

  // Prevents closing menu while loading new page,
  useEffect(() => {
    if (!isOpen) return;

    function onRouteChange() {
      setIsOpen(false);
    }

    router.events.on("routeChangeComplete", onRouteChange);
    router.events.on("routeChangeError", onRouteChange);

    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
      router.events.off("routeChangeError", onRouteChange);
    };
  }, [router, isOpen, setIsOpen]);

  return (
    <>
      <BurgerButton isOpen={isOpen} onClick={toggleMenu} />
      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            {/* Overlay - premade if needed for changes */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15 },
              }}
              onClick={closeMenu}
              onTap={closeMenu}
              className="z-offcanvas-below fixed inset-0 bg-gray-900/40 backdrop-blur-md"
            /> */}

            {/* Panel with content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, ease: [0.33, 1, 0.68, 1] },
              }}
              className="z-offcanvas fixed inset-0 min-h-screen w-screen bg-gray-300 dark:bg-gray-800"
            >
              {/* Menu */}
              <Container
                size="md"
                className="h-full pt-24 pb-8 sm:pb-12 lg:flex lg:items-center"
              >
                <div className="grid w-full gap-8 lg:grid-cols-7 lg:pb-16">
                  {/* Navigace */}
                  <div className="col-span-1 lg:order-3 lg:col-span-2">
                    <span className="mb-3 block text-xs uppercase opacity-60 sm:text-sm lg:mb-6">
                      Menu
                    </span>
                    <ul className="flex flex-col items-start gap-y-2 lg:gap-y-5">
                      {routes.map((route, i) => (
                        <TouchNavLink key={i} i={i} {...route} />
                      ))}
                    </ul>
                  </div>

                  {/* Kontaktní údaje */}
                  <div className="col-span-1 lg:order-2 lg:col-span-2">
                    <span className="mb-3 block text-xs uppercase opacity-60 sm:text-sm lg:mb-6">
                      Kontakt
                    </span>
                    <ul className="flex flex-col items-start gap-y-2">
                      {contact.map((contactLink, i) => (
                        <Link
                          href={contactLink.href}
                          key={i}
                          i={i}
                          hoverEffect="scale-down"
                          className="sm:text-lg lg:text-xl"
                        >
                          {contactLink.label}
                        </Link>
                      ))}
                    </ul>
                  </div>

                  {/* Sociální sítě */}
                  <div className="col-span-1 lg:order-1 lg:col-span-2">
                    <span className="mb-3 block text-xs uppercase opacity-60 sm:text-sm lg:mb-6">
                      Sociální sítě
                    </span>
                    <ul className="flex flex-col items-start gap-y-2">
                      {socials.map((social, i) => (
                        <Link
                          href={social.href}
                          key={i}
                          i={i}
                          className="transition-colors duration-150 hover:text-primary sm:text-lg lg:text-xl"
                        >
                          {social.label}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Use useScroll hook from framer-motion
  const { scrollY } = useScroll();

  // Handeling scroll events
  useEffect(() => {
    return scrollY.on("change", (y) => {
      const current = y;
      const prev = scrollY.getPrevious();
      if (current > 64) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (current > 640 && current > prev) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
  }, [scrollY, setIsVisible, setIsScrolled]);

  return (
    <header>
      <nav
        className={clsx(
          "z-fixed fixed inset-x-0 top-0 w-screen transition duration-500 ease-out",
          isScrolled &&
            "bg-gray-50/80 shadow-2xl shadow-gray-700/10 backdrop-blur-md dark:bg-gray-900/80 dark:shadow-none",
          !isVisible && "-translate-y-full shadow-none"
        )}
      >
        <Container
          size="lg"
          className="flex items-center justify-between gap-4 py-5 sm:py-6"
        >
          {/* Logo */}
          <Link href={"/"} className="z-offcanvas-above relative mr-auto">
            <Logo background="light" className="dark:hidden" />
            <Logo background="dark" className="hidden dark:block" />
          </Link>

          {/* Desktop navigation */}
          <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <ul className="flex gap-5 xl:gap-10">
              {routes.map((route, i) => (
                <DesktopNavLink key={i} {...route} />
              ))}
            </ul>
          </div>

          <div>
            <ThemeSwitch />
          </div>

          {/* Mobile navigation */}
          <div>
            <TouchMenu />
          </div>
        </Container>
      </nav>
    </header>
  );
}
