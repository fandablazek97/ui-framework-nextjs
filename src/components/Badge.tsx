import CloseButton from "@components/CloseButton";
import clsx from "clsx";
import { forwardRef, useState } from "react";

type BadgeProps = {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "tinted" | "outlined" | "unstyled";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "neutral"
    | "white"
    | "black";
  radius?: "default" | "none" | "sm" | "md" | "lg" | "full";
  hasDot?: boolean;
  isDismissable?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  root: "inline-flex items-center justify-center font-medium",
  size: {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "text-base px-3.5 py-1",
  },
  variant: {
    filled: {
      primary: "bg-primary text-primary-content",
      secondary: "bg-secondary text-secondary-content",
      success: "bg-success text-success-content",
      warning: "bg-warning text-warning-content",
      error: "bg-error text-error-content",
      neutral: "bg-neutral text-neutral-content",
      white: "bg-gray-50 text-gray-900",
      black: "bg-gray-900 text-white",
    },
    tinted: {
      primary: "bg-primary/10 text-primary",
      secondary: "bg-secondary/10 text-secondary",
      success: "bg-success/10 text-success",
      warning: "bg-warning/10 text-warning",
      error: "bg-error/10 text-error",
      neutral: "bg-neutral/10 text-neutral",
      white: "bg-gray-900/10 text-gray-900",
      black: "bg-white/10 text-white",
    },
    outlined: {
      primary: "ring-1 ring-primary text-primary",
      secondary: "ring-1 ring-secondary text-secondary",
      success: "ring-1 ring-success text-success",
      warning: "ring-1 ring-warning text-warning",
      error: "ring-1 ring-error text-error",
      neutral: "ring-1 ring-neutral text-neutral",
      white: "ring-1 ring-gray-50 text-gray-50",
      black: "ring-1 ring-gray-900 text-gray-900",
    },
    unstyled: {
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      error: "",
      neutral: "",
      white: "",
      black: "",
    },
  },
  radius: {
    default: "rounded",
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-xl",
    full: "rounded-full",
  },
  dot: "w-2 h-2 bg-current mr-1.5 rounded-full opacity-70",
};

const Badge = forwardRef<Ref, BadgeProps>(
  (
    {
      // Component props
      as: Tag = "span",
      size = "md",
      variant = "tinted",
      color = "primary",
      radius = "full",
      hasDot = true,
      isDismissable = false,
      className = "",
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    // Component logic
    const [isDismissed, setIsDismissed] = useState(false);

    function removeBadge() {
      setIsDismissed(true);
    }

    // Destroy component if dismissed
    if (isDismissed) return null;

    return (
      // Component Markup
      <Tag
        ref={ref}
        onClick={onClick}
        className={clsx(
          componentVariants.root,
          componentVariants.size[size],
          componentVariants.variant[variant][color],
          componentVariants.radius[radius],
          className
        )}
        {...rest}
      >
        {hasDot && <span className={componentVariants.dot} />}
        {children}
        {isDismissable && (
          <CloseButton
            onClick={removeBadge}
            size="xs"
            className="ml-1 translate-x-0.5"
          />
        )}
      </Tag>
    );
  }
);

export type Ref = HTMLElement;
Badge.displayName = "Badge";

export default Badge;
