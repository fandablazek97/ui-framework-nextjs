import CloseButton from "@components/CloseButton";
import clsx from "clsx";
import { forwardRef, useState } from "react";

type BadgeProps = {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "subtle" | "outlined";
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
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
    },
    subtle: {
      primary: "bg-primary-subtle/30 text-primary-subtle-content",
      secondary: "bg-secondary-subtle/30 text-secondary-subtle-content",
      success: "bg-success-subtle/30 text-success-subtle-content",
      warning: "bg-warning-subtle/30 text-warning-subtle-content",
      error: "bg-error-subtle/30 text-error-subtle-content",
      neutral: "bg-neutral-subtle/30 text-neutral-subtle-content",
    },
    outlined: {
      primary: "ring-1 ring-primary text-primary",
      secondary: "ring-1 ring-secondary text-secondary",
      success: "ring-1 ring-success text-success",
      warning: "ring-1 ring-warning text-warning",
      error: "ring-1 ring-error text-error",
      neutral: "ring-1 ring-neutral text-neutral",
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
  dot: "w-2 h-2 mr-1.5 rounded-full",
};

const Badge = forwardRef<Ref, BadgeProps>(
  (
    {
      // Component props
      as: Tag = "span",
      size = "md",
      variant = "subtle",
      color = "primary",
      radius = "full",
      hasDot = false,
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
        {hasDot && (
          <span className={clsx(componentVariants.dot, "bg-current")} />
        )}
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
