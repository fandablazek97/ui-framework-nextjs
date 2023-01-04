import clsx from "clsx";
import { forwardRef } from "react";
import Loader from "./Loader";

type ButtonProps = {
  children: string;
  as?: React.ElementType;
  variant?: "filled" | "outlined" | "subtle" | "plain";
  color?:
    | "primary"
    | "secondary"
    | "neutral"
    | "success"
    | "info"
    | "warning"
    | "error";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  isFullWidth?: boolean;
  hasShadow?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFocusable?: boolean;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

// 02 - Component Variant Styles
const componentVariants = {
  base: "inline-flex items-center group/button justify-center relative isolate overflow-hidden font-medium tracking-wide no-underline transition duration-200 cursor-pointer",
  variantsBase: {
    filled: "",
    outlined: "bg-opacity-0 hover:bg-opacity-100 ring-inset ring-1",
    subtle: "bg-opacity-10 hover:bg-opacity-20",
    plain: "bg-opacity-0 hover:bg-opacity-20",
  },
  variantColors: {
    filled: {
      primary: "bg-primary hover:bg-primary-effect text-primary-content",
      secondary:
        "bg-secondary hover:bg-secondary-effect text-secondary-content",
      neutral:
        "bg-neutral hover:bg-neutral-effect dark:hover:bg-neutral-effect text-neutral-content",
      success: "bg-success hover:bg-success-effect text-success-content",
      error: "bg-error hover:bg-error-effect text-error-content",
      warning: "bg-warning hover:bg-warning-effect text-warning-content",
      info: "bg-info hover:bg-info-effect text-info-content",
    },
    outlined: {
      primary:
        "bg-primary text-primary ring-primary hover:text-primary-content",
      secondary:
        "bg-secondary text-secondary ring-secondary hover:text-secondary-content",
      neutral:
        "bg-neutral text-neutral ring-neutral hover:text-neutral-content",
      success:
        "bg-success text-success ring-success hover:text-success-content",
      error: "bg-error text-error ring-error hover:text-error-content",
      warning:
        "bg-warning text-warning ring-warning hover:text-warning-content",
      info: "bg-info text-info ring-info hover:text-info-content",
    },
    subtle: {
      primary: "bg-primary-effect text-primary",
      secondary: "bg-secondary-effect text-secondary",
      neutral: "bg-neutral-effect text-neutral",
      success: "bg-success-effect text-success",
      error: "bg-error-effect text-error",
      warning: "bg-warning-effect text-warning",
      info: "bg-info-effect text-info",
    },
    plain: {
      primary: "bg-primary-effect text-primary",
      secondary: "bg-secondary-effect text-secondary",
      neutral: "bg-neutral-effect text-neutral",
      success: "bg-success-effect text-success",
      error: "bg-error-effect text-error",
      warning: "bg-warning-effect text-warning",
      info: "bg-info-effect text-info",
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
    xs: "px-2 py-1 text-xs leading-3 sm:px-2.5 sm:py-1.5 sm:text-xs sm:leading-3",
    sm: "px-2.5 py-1.5 text-xs leading-3 sm:px-3 sm:py-2 sm:text-sm sm:leading-4",
    md: "px-3 py-2 text-sm leading-4 sm:px-4 sm:py-2.5 sm:text-sm sm:leading-5",
    lg: "px-4 py-2.5 text-sm leading-5 sm:px-4 sm:py-3 sm:text-base sm:leading-6",
    xl: "px-4 py-3 text-base leading-6 sm:px-6 sm:py-4 sm:text-base sm:leading-7",
  },
  isFullWidth: {
    true: "w-full",
    false: "",
  },
  hasShadow: {
    primary: "shadow-md shadow-primary/40",
    secondary: "shadow-md shadow-secondary/40",
    neutral: "shadow-md shadow-neutral/40",
    success: "shadow-md shadow-success/40",
    error: "shadow-md shadow-error/40",
    warning: "shadow-md shadow-warning/40",
    info: "shadow-md shadow-info/40",
  },
  isDisabled: {
    true: "pointer-events-none opacity-50",
    false: "",
  },
  isLoading: {
    true: "pointer-events-none opacity-50",
    false: "",
  },
};

const Button = forwardRef<Ref, ButtonProps>(
  (
    {
      // Component props
      as: Tag = "button",
      variant = "filled",
      color = "primary",
      radius = "lg",
      size = "md",
      leftIcon = null,
      rightIcon = null,
      isFullWidth = false,
      hasShadow = false,
      isLoading = false,
      isDisabled = false,
      isFocusable = true,
      className = "",
      onClick,
      children,
      ...rest
    },
    ref
  ) => {
    // Component logic
    // Affects `will change` property
    // const [hover, setHover] = useState(false);
    return (
      <Tag
        ref={ref}
        className={clsx(
          className,
          componentVariants.base,
          componentVariants.variantsBase[variant],
          componentVariants.variantColors[variant][color],
          componentVariants.radius[radius],
          componentVariants.sizes[size],
          isFullWidth && componentVariants.isFullWidth.true,
          hasShadow && componentVariants.hasShadow[color],
          isDisabled && componentVariants.isDisabled.true,
          isLoading && componentVariants.isLoading.true
        )}
        onClick={onClick}
        disabled={isDisabled || isLoading}
        aria-hidden={isDisabled || isLoading}
        tabIndex={isDisabled || isLoading || !isFocusable ? -1 : 0}
        {...rest}
      >
        {leftIcon !== null && (
          <span
            aria-hidden="true"
            className={clsx(
              "z-[1] mr-2 scale-[1.15]",
              isLoading && "invisible"
            )}
          >
            {leftIcon}
          </span>
        )}

        <span className={clsx(isLoading && "invisible", "z-[1]")}>
          {children}
        </span>

        {rightIcon !== null && (
          <span
            aria-hidden="true"
            className={clsx(
              "z-[1] ml-2 scale-[1.15]",
              isLoading && "invisible"
            )}
          >
            {rightIcon}
          </span>
        )}

        {isLoading && (
          <Loader
            size="inherit"
            thickness="inherit"
            color="inherit"
            className="absolute inset-auto z-[1] m-auto text-[1.4em]"
          />
        )}
      </Tag>
    );
  }
);

export type Ref = HTMLElement;

Button.displayName = "Button";

export default Button;
