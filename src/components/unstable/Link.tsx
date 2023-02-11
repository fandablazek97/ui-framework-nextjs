import clsx from "clsx";
import NextLink from "next/link";
import { forwardRef, useMemo } from "react";

// ToDo:
// - Need to be properly tested

type LinkProps = {
  href: string;
  isExternal?: boolean | undefined;
  replace?: boolean;

  passHref?: boolean;
  scroll?: boolean;

  target?: HTMLAnchorElement["target"];
  rel?: HTMLAnchorElement["rel"];

  color?: "inherit" | "primary" | "secondary";
  hoverEffect?:
    | "none"
    | "static"
    | "appear"
    | "disappear"
    | "slide-left"
    | "slide-right"
    | "slide-back"
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
  hoverEffect: {
    none: "",
    static:
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full bg-current opacity-0 group-hover/link:opacity-60",
    appear:
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-center translate-y-[-0.2875em] transform-gpu bg-current opacity-0 transition duration-200 group-hover/link:translate-y-0 group-hover/link:opacity-60",
    disappear:
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-center translate-y-0 transform-gpu bg-current opacity-60 transition duration-200 group-hover/link:translate-y-[0.125em] group-hover/link:opacity-0",
    "slide-left":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-left scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:origin-right group-hover/link:scale-x-100",
    "slide-right":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-right scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:origin-left group-hover/link:scale-x-100",
    "slide-back":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-left scale-x-100 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:origin-right group-hover/link:scale-x-0 ease-out-circ",
    "scale-up":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-center scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:scale-x-100 ease-out-circ",
    "scale-down":
      "absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-center scale-x-100 transform-gpu bg-current opacity-60 transition-transform duration-300 group-hover/link:scale-x-0 ease-out-circ",
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
      scroll = true,
      target,
      rel,
      color = "inherit",
      hoverEffect = "none",
      children,
      onClick,
      className = "",
      ...rest
    },
    ref
  ) => {
    // Resolve link type
    const isExternalComputed = useMemo(() => {
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
    }, [isExternal, href, target]);

    // If target is not set, then set it to "_blank" for external links
    if (isExternalComputed && !target && !href.startsWith("#")) {
      target = "_blank";
    }

    // If rel is not set, then set it to "noopener noreferrer" for external links
    if (isExternalComputed && !rel && !href.startsWith("#")) {
      rel = "noopener noreferrer";
    }

    return !isExternalComputed ? (
      <NextLink
        ref={ref}
        href={href}
        onClick={onClick}
        passHref={passHref}
        legacyBehavior={passHref}
        replace={replace}
        scroll={scroll}
        className={clsx(
          hoverEffect !== "none" && componentVariants.root,
          componentVariants.color[color],
          className
        )}
        {...rest}
      >
        {hoverEffect !== "none" && (
          <span
            className={clsx(componentVariants.hoverEffect[hoverEffect])}
          ></span>
        )}
        {hoverEffect === "slide-back" && (
          <span className="absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-right scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 ease-out-circ group-hover/link:origin-left group-hover/link:scale-x-100 group-hover/link:delay-300"></span>
        )}
        {children}
      </NextLink>
    ) : (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={clsx(
          hoverEffect !== "none" && componentVariants.root,
          componentVariants.color[color],
          className
        )}
        {...rest}
      >
        {hoverEffect !== "none" && (
          <span
            className={clsx(componentVariants.hoverEffect[hoverEffect])}
          ></span>
        )}
        {hoverEffect === "slide-back" && (
          <span className="absolute inset-x-0 top-[92%] h-[0.0625em] w-full origin-right scale-x-0 transform-gpu bg-current opacity-60 transition-transform duration-300 ease-out-circ group-hover/link:origin-left group-hover/link:scale-x-100 group-hover/link:delay-300"></span>
        )}
        {children}
      </a>
    );
  }
);

export type Ref = HTMLAnchorElement;
Link.displayName = "Link";

export default Link;
