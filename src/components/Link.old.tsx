import clsx from "clsx";
import NextLink from "next/link";
import { forwardRef } from "react";

type LinkProps = {
  href: string;
  isExternal?: boolean | undefined;
  replace?: boolean;

  passHref?: boolean;
  prefetch?: boolean;
  scroll?: boolean;

  target?: HTMLAnchorElement["target"];
  rel?: HTMLAnchorElement["rel"];

  color?: "inherit" | "primary" | "secondary";
  textEffect?:
    | "none"
    | "opacity"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right";
  underlineEffect?:
    | "none"
    | "static"
    | "appear"
    | "slide-left"
    | "slide-right"
    | "scale-up"
    | "scale-down";

  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  [x: string]: any;
};

const componentVariants = {
  root: "relative group/link h-max",
  color: {
    inherit: "",
    primary: "text-primary",
    secondary: "text-secondary",
  },
  textEffect: {
    content: {
      none: "",
      opacity:
        "group-hover/link:opacity-80 text-current transition-opacity duration-200",
      "slide-up":
        "block group-hover/link:translate-y-[-105%] transform-gpu transition-transform duration-300",
      "slide-down":
        "block group-hover/link:translate-y-[105%] transform-gpu transition-transform duration-300",
      "slide-left":
        "block group-hover/link:translate-x-[-110%] transform-gpu transition-transform duration-300",
      "slide-right":
        "block group-hover/link:translate-x-[110%] transform-gpu transition-transform duration-300",
    },
    effect: {
      none: "",
      opacity: "hidden",
      "slide-up":
        "absolute top-[105%] inset-x-0 skew-y-6 group-hover/link:translate-y-[-105%] group-hover/link:skew-y-0 transform-gpu transition duration-300",
      "slide-down":
        "absolute top-[-105%] inset-x-0 -skew-y-6 group-hover/link:translate-y-[105%] group-hover/link:skew-y-0 transform-gpu transition duration-300",
      "slide-left":
        "absolute right-[-110%] inset-y-0 skew-x-12 group-hover/link:translate-x-[-110%] group-hover/link:skew-x-0 transform-gpu transition duration-300",
      "slide-right":
        "absolute left-[-110%] inset-y-0 -skew-x-12 group-hover/link:translate-x-[110%] group-hover/link:skew-x-0 transform-gpu transition duration-300",
    },
  },
  underlineEffect: {
    none: "",
    static:
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full bg-current opacity-0 group-hover/link:opacity-60",
    appear:
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-center translate-y-[-0.2875em] transform-gpu bg-current opacity-0 transition duration-200 group-hover/link:translate-y-0 group-hover/link:opacity-60",
    "slide-left":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-left scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:origin-right group-hover/link:scale-x-100",
    "slide-right":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-right scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:origin-left group-hover/link:scale-x-100",
    "scale-up":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-center scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:scale-x-100",
    "scale-down":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-center scale-x-100 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:scale-x-0",
  },
};

const Link = forwardRef<Ref, LinkProps>(
  (
    {
      // Component props
      href,
      isExternal = undefined,
      replace = false,
      passHref = false,
      prefetch = true,
      scroll = true,
      target,
      rel,
      color = "inherit",
      textEffect = "none",
      underlineEffect = "none",
      children,
      onClick,
      className = "",
      ...rest
    },
    ref
  ) => {
    // Resolve link type
    const isExternalComputed = () => {
      // isExternal prop is explicitly set
      if (isExternal === true) return true;
      if (isExternal === false) return false;

      // When `target` prop is set, then link is external
      if (target && target !== "_self") return true;

      // if href starts with `/` then it is internal link
      if (href.startsWith("/")) return false;

      // Resolve external link based on href value
      if (
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.startsWith("tel") ||
        href.startsWith("sms") ||
        href.startsWith("#")
      ) {
        return true;
      } else {
        return false;
      }
    };

    // If target is not set, then set it to "_blank" for external links
    if (isExternalComputed() && !target) {
      target = "_blank";
    }

    // If rel is not set, then set it to "noopener noreferrer" for external links
    if (isExternalComputed() && !rel) {
      rel = "noopener noreferrer";
    }

    return !isExternalComputed() ? (
      <NextLink
        ref={ref}
        href={href}
        onClick={onClick}
        passHref={passHref}
        legacyBehavior={passHref}
        replace={replace}
        prefetch={prefetch}
        scroll={scroll}
        className={clsx(
          (textEffect !== "none" || underlineEffect !== "none") &&
            componentVariants.root,
          textEffect !== "none" && "overflow-hidden",
          componentVariants.color[color],
          className
        )}
        {...rest}
      >
        <>
          {underlineEffect !== "none" && (
            <span
              className={clsx(
                componentVariants.underlineEffect[underlineEffect]
              )}
            ></span>
          )}
          {textEffect === "none" ? (
            { children }
          ) : (
            <>
              <span
                className={clsx(
                  componentVariants.textEffect.content[textEffect]
                )}
              >
                {children}
              </span>
              {textEffect !== "opacity" && (
                <span
                  aria-hidden="true"
                  className={clsx(
                    componentVariants.textEffect.effect[textEffect]
                  )}
                >
                  {children}
                </span>
              )}
            </>
          )}
        </>
      </NextLink>
    ) : (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={clsx(
          (textEffect !== "none" || underlineEffect !== "none") &&
            componentVariants.root,
          textEffect !== "none" && "overflow-hidden",
          componentVariants.color[color],
          className
        )}
        {...rest}
      >
        <>
          {underlineEffect !== "none" && (
            <span
              className={clsx(
                componentVariants.underlineEffect[underlineEffect]
              )}
            ></span>
          )}
          {textEffect === "none" ? (
            { children }
          ) : (
            <>
              <span
                className={clsx(
                  componentVariants.textEffect.content[textEffect]
                )}
              >
                {children}
              </span>
              {textEffect !== "opacity" && (
                <span
                  aria-hidden="true"
                  className={clsx(
                    componentVariants.textEffect.effect[textEffect]
                  )}
                >
                  {children}
                </span>
              )}
            </>
          )}
        </>
      </a>
    );
  }
);

export type Ref = HTMLAnchorElement;

Link.displayName = "Link";

export default Link;
