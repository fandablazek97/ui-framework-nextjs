import Loader from "@components/Loader";
import clsx from "clsx";
import { forwardRef, useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  isExternal?: boolean;

  variant?: "filled" | "subtle" | "outlined" | "plain";
  hoverEffect?:
    | "fade"
    | "appear"
    | "expand"
    | "slide-right"
    | "slide-left"
    | "slide-top"
    | "slide-bottom";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "neutral"
    | "white"
    | "black";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;

  isFUllWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFocusable?: boolean;

  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  root: "relative isolate group/button inline-flex items-center justify-center font-medium no-underline overflow-hidden cursor-pointer leading-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
  transition: "transition duration-400 ease-out",
  layer: {
    // Base layer applied to the root of the button
    base: {
      filled: {
        primary: "text-primary-content",
        secondary: "text-secondary-content",
        success: "text-success-content",
        warning: "text-warning-content",
        error: "text-error-content",
        neutral: "text-neutral-content",
        white: "text-gray-900",
        gray: "text-white",
        black: "text-white",
      },
      subtle: {
        primary: "text-primary-subtle-content",
        secondary: "text-secondary-subtle-content",
        success: "text-success-subtle-content",
        warning: "text-warning-subtle-content",
        error: "text-error-subtle-content",
        neutral: "text-neutral-subtle-content",
        white: "text-white",
        black: "text-gray-900",
      },
      outlined: {
        primary:
          "text-primary ring-1 ring-inset ring-primary hover:text-primary-content",
        secondary:
          "text-secondary ring-1 ring-inset ring-secondary hover:text-secondary-content",
        success:
          "text-success ring-1 ring-inset ring-success hover:text-success-content",
        warning:
          "text-warning ring-1 ring-inset ring-warning hover:text-warning-content",
        error:
          "text-error ring-1 ring-inset ring-error hover:text-error-content",
        neutral:
          "text-neutral ring-1 ring-inset ring-neutral hover:text-neutral-content",
        white: "text-white ring-1 ring-inset ring-white hover:text-gray-900",
        black: "text-gray-900 ring-1 ring-inset ring-gray-900 hover:text-white",
      },
      plain: {
        primary: "text-primary-subtle-content",
        secondary: "text-secondary-subtle-content",
        success: "text-success-subtle-content",
        warning: "text-warning-subtle-content",
        error: "text-error-subtle-content",
        neutral: "text-neutral-subtle-content",
        white: "text-white",
        black: "text-gray-900",
      },
    },
    // Background layer visible in a initial state
    background: {
      filled: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        success: "bg-success",
        warning: "bg-warning",
        error: "bg-error",
        neutral: "bg-neutral",
        white: "bg-white",
        black: "bg-gray-900",
      },
      subtle: {
        primary: "bg-primary-subtle/30",
        secondary: "bg-secondary-subtle/30",
        success: "bg-success-subtle/30",
        warning: "bg-warning-subtle/30",
        error: "bg-error-subtle/30",
        neutral: "bg-neutral-subtle/30",
        white: "bg-gray-600/30",
        black: "bg-gray-400/30",
      },
      outlined: {
        primary: "bg-transparent",
        secondary: "bg-transparent",
        success: "bg-transparent",
        warning: "bg-transparent",
        error: "bg-transparent",
        neutral: "bg-transparent",
        white: "bg-transparent",
        black: "bg-transparent",
      },
      plain: {
        primary: "bg-transparent",
        secondary: "bg-transparent",
        success: "bg-transparent",
        warning: "bg-transparent",
        error: "bg-transparent",
        neutral: "bg-transparent",
        white: "bg-transparent",
        black: "bg-transparent",
      },
    },
    // background overlay layer visible on hover and making the hover effect
    overlayOnHover: {
      filled: {
        primary: "bg-primary-hover",
        secondary: "bg-secondary-hover",
        success: "bg-success-hover",
        warning: "bg-warning-hover",
        error: "bg-error-hover",
        neutral: "bg-neutral-hover",
        white: "bg-gray-300",
        black: "bg-gray-700",
      },
      subtle: {
        primary: "bg-primary-subtle/70",
        secondary: "bg-secondary-subtle/70",
        success: "bg-success-subtle/70",
        warning: "bg-warning-subtle/70",
        error: "bg-error-subtle/70",
        neutral: "bg-neutral-subtle/70",
        white: "bg-gray-600/70",
        black: "bg-gray-400/70",
      },
      outlined: {
        primary: "bg-primary",
        secondary: "bg-secondary",
        success: "bg-success",
        warning: "bg-warning",
        error: "bg-error",
        neutral: "bg-neutral",
        white: "bg-white",
        black: "bg-gray-900",
      },
      plain: {
        primary: "bg-primary-subtle/50",
        secondary: "bg-secondary-subtle/50",
        success: "bg-success-subtle/50",
        warning: "bg-warning-subtle/50",
        error: "bg-error-subtle/50",
        neutral: "bg-neutral-subtle/50",
        white: "bg-gray-600/50",
        black: "bg-gray-400/50",
      },
    },
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  },
  sizes: {
    xs: "px-2.5 py-1.5 text-xs",
    sm: "px-3.5 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-base",
    xl: "px-7 py-4 text-lg",
  },
  // Applied to the hover overlay layer and making the hover effect it self
  hoverEffect: {
    fade: "opacity-0 group-hover/button:opacity-100",
    appear:
      "opacity-0 scale-[0.8] group-hover/button:opacity-100 group-hover/button:scale-100",
    expand:
      "origin-center opacity-0 scale-x-0 -skew-x-12 group-hover/button:opacity-100 group-hover/button:scale-x-[120%] transform-gpu",
    "slide-right":
      "w-[120%] origin-center opacity-0 -skew-x-12 -translate-x-full group-hover/button:opacity-100 group-hover/button:translate-x-[-10%] transform-gpu",
    "slide-left":
      "w-[120%] origin-center opacity-0 -skew-x-12 translate-x-full group-hover/button:opacity-100 group-hover/button:translate-x-[-10% transform-gpu]",
    "slide-top":
      "h-[140%] w-[120%] origin-center opacity-0 skew-y-6 translate-y-full group-hover/button:opacity-100 group-hover/button:translate-y-[-20%] transform-gpu",
    "slide-bottom":
      "h-[140%] w-[120%] origin-center opacity-0 skew-y-6 -translate-y-full group-hover/button:opacity-100 group-hover/button:translate-y-[-20%] transform-gpu",
  },
  fullWidth: "w-full",
  isLoading: "pointer-events-none opacity-50",
  isDisabled: "pointer-events-none opacity-50",
};

const Button = forwardRef<Ref, ButtonProps>(
  (
    {
      // Component props
      as: Tag = "button",
      variant = "filled",
      hoverEffect = "expand",
      color = "success",
      radius = "md",
      size = "md",
      leftIcon,
      rightIcon,
      isFullWidth = false,
      isLoading = false,
      isDisabled = false,
      isFocusable = true,
      className = "",
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    // If href is passed, we render an anchor tag

    // State detecting if the button is hovered
    // for appling "will-change" for performance
    const [isHovered, setIsHovered] = useState(false);

    return (
      <Tag
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        disabled={isDisabled || isLoading}
        aria-hidden={isDisabled || isLoading}
        tabIndex={isDisabled || isLoading || !isFocusable ? -1 : 0}
        className={clsx(
          componentVariants.root,
          componentVariants.transition,
          componentVariants.layer.base[variant][color],
          componentVariants.sizes[size],
          componentVariants.radius[radius],
          isFullWidth && componentVariants.fullWidth,
          isLoading && componentVariants.isLoading,
          isDisabled && componentVariants.isDisabled,
          isHovered && "will-change-transform",
          className
        )}
        {...rest}
      >
        {/* ** Layer background ** */}
        {(variant === "filled" || variant === "subtle") && (
          <span
            className={clsx(
              "absolute inset-0 -z-20",
              componentVariants.radius[radius],
              componentVariants.layer.background[variant][color]
            )}
          />
        )}

        {/* ** Layer hover ** */}
        <span
          className={clsx(
            "absolute inset-0 -z-10",
            componentVariants.transition,
            componentVariants.radius[radius],
            componentVariants.layer.overlayOnHover[variant][color],
            componentVariants.hoverEffect[hoverEffect],
            isHovered && "will-change-transform"
          )}
        />

        {/* ** Layer content ** */}
        {/* Left icon */}
        {leftIcon && (
          <span
            aria-hidden="true"
            className={clsx(
              "z-10 mr-2 translate-x-0 scale-[1.15] transform-gpu",
              isLoading && "invisible"
            )}
          >
            {leftIcon}
          </span>
        )}

        {/* Text */}
        <span
          className={clsx(
            "z-10 translate-x-0 transform-gpu",
            isLoading && "invisible"
          )}
        >
          {children}
        </span>

        {/* Right icon */}
        {rightIcon && (
          <span
            aria-hidden="true"
            className={clsx(
              "z-10 ml-2 translate-x-0 scale-[1.15] transform-gpu",
              isLoading && "invisible"
            )}
          >
            {rightIcon}
          </span>
        )}

        {/* Loading spinner */}
        {isLoading && (
          <Loader
            size="inherit"
            thickness="inherit"
            color="inherit"
            className="absolute inset-auto z-[1] m-auto translate-x-0 transform-gpu text-[1.4em]"
          />
        )}
      </Tag>
    );
  }
);

export type Ref = HTMLElement;
Button.displayName = "Button";

export default Button;
