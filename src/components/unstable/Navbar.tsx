import Container from "@components/Container";
import ThemeSwitch from "@components/ThemeSwitch";
import { Logo } from "@components/unstable/Logo";
import { routes } from "@configs/routes";
// import { useScrollPosition } from "@hooks/useScrollPosition";
import clsx from "clsx";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
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
      className={clsx(
        "text-sm",
        matches
          ? "pointer-events-none cursor-default text-primary"
          : "text-body"
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
        "font-sans text-lg font-bold sm:text-2xl",
        matches
          ? "pointer-events-none cursor-default text-primary"
          : "text-body-rich"
      )}
    >
      <Link href={href} passHref legacyBehavior>
        <motion.a
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
        </motion.a>
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
        "group relative z-offcanvas-above flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full"
      )}
      onClick={onClick}
    >
      <span
        className={clsx(
          "h-0.5 w-6 origin-center transform-gpu rounded-full bg-body-rich transition duration-300 ease-out-back group-hover:bg-surface",
          isOpen && "translate-y-[4px] -rotate-45"
        )}
      />
      <span
        className={clsx(
          "h-0.5 w-6 origin-center transform-gpu rounded-full bg-body-rich transition duration-300 ease-out-back group-hover:bg-surface",
          isOpen && "-translate-y-[4px] rotate-45"
        )}
      />
      <span
        className={clsx(
          "absolute inset-0 -z-10 h-full w-full scale-75 rounded-full bg-body-rich opacity-0 transition duration-300 ease-out-back group-hover:scale-110 group-hover:opacity-100"
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

  // Prevents closing the menu when Link is clicked,
  // but new page is not fully loaded yet
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
            {/* Overlay - if needed for changes */}
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
              // initial={{ opacity: 0, y: -64 }}
              // animate={{
              //   opacity: 1,
              //   y: 0,
              //   transition: { duration: 0.4, ease: "easeOut" },
              // }}
              // exit={{
              //   opacity: 0,
              //   y: -64,
              //   transition: { duration: 0.2 },
              // }}
              className="fixed inset-0 z-offcanvas"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
                exit={{
                  scale: 0,
                  transition: { duration: 0.6 },
                }}
                className="fixed top-[calc(40px-250vw)] right-[calc(60px-250vw)] h-[500vw] w-[500vw] origin-center rounded-full bg-surface-100 md:top-[calc(40px-190vw)] md:right-[calc(60px-190vw)] md:h-[380vw] md:w-[380vw] lg:top-[calc(48px-125vw)] lg:right-[calc(60px-125vw)] lg:h-[250vw] lg:w-[250vw]"
              ></motion.div>
              {/* Menu */}
              <Container size="lg" className="pt-24 pb-8 sm:pb-12">
                <ul className="flex flex-col gap-y-2">
                  {routes.map((route, i) => (
                    <TouchNavLink key={i} i={i} {...route} />
                  ))}
                </ul>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Navbar() {
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
          "fixed inset-x-0 top-0 z-fixed w-screen transition duration-500 ease-out",
          isScrolled &&
            "bg-surface/80 shadow-xl backdrop-blur-md dark:shadow-none",
          !isVisible && "-translate-y-full shadow-none"
        )}
      >
        <Container
          size="lg"
          className="flex items-center justify-between gap-4 py-5 sm:py-6"
        >
          {/* Logo */}
          <div className="relative z-offcanvas-above mr-auto">
            <Logo variant="light-background" className="dark:hidden" />
            <Logo variant="dark-background" className="hidden dark:block" />
          </div>

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
