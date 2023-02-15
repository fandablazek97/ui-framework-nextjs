import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function ChevronUpIcon({ ...props }: { [x: string]: any }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

type ScrollToTopProps = {
  className?: string;
  [x: string]: any;
};

export default function ScrollToTop({
  className = "",
  ...rest
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If viewport is scrolled further than 640px, show button
    function handleScroll() {
      if (window.scrollY > 640) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsVisible]);

  // Scroll to top handler
  function scrollToTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className={clsx(
              "z-fixed group fixed left-7 bottom-7 flex h-12 w-12 items-center justify-center text-white dark:text-gray-900",
              className
            )}
            {...rest}
          >
            <ChevronUpIcon className="h-6 w-6" />
            <span className="ease-out-back absolute inset-0 -z-10 h-full w-full rounded-full bg-gray-900 transition duration-300 group-hover:scale-125 dark:bg-white"></span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
