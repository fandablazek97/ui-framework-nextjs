import CloseButton from "@components/CloseButton";
import clsx from "clsx";
import { forwardRef, useState } from "react";

type BadgeProps = {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg";
  intent?: "tinted" | "filled";
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "gray";
  hasDot?: boolean;
  isDismissable?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  root: "inline-flex items-center justify-center font-medium rounded-full",
  size: {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "text-base px-3.5 py-1",
  },
  intent: {
    tinted: {
      primary:
        "text-primary-800 dark:text-primary-200 bg-primary-300/30 dark:bg-primary-800/30",
      secondary:
        "text-secondary-800 dark:text-secondary-200 bg-secondary-300/30 dark:bg-secondary-800/30",
      success:
        "text-success-800 dark:text-success-200 bg-success-300/30 dark:bg-success-800/30",
      warning:
        "text-warning-800 dark:text-warning-200 bg-warning-300/30 dark:bg-warning-800/30",
      error:
        "text-error-800 dark:text-error-200 bg-error-300/30 dark:bg-error-800/30",
      gray: "text-gray-800 dark:text-gray-200 bg-gray-300/30 dark:bg-gray-600/30",
    },
    filled: {
      primary: "text-primary-50 bg-primary-600",
      secondary: "text-secondary-50 bg-secondary-600",
      success: "text-success-50 bg-success-600",
      warning: "text-warning-50 bg-warning-600",
      error: "text-error-50 bg-error-600",
      gray: "text-gray-50 bg-gray-600 dark:bg-gray-600",
    },
  },
  dot: "w-2 h-2 bg-current mr-1.5 rounded-full opacity-70",
};

const Badge = forwardRef<Ref, BadgeProps>(
  (
    {
      // Component props
      as: Tag = "span",
      size = "sm",
      intent = "tinted",
      color = "primary",
      hasDot = true,
      isDismissable = false,
      className = "",
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    // State for removing badge component
    const [isDismissed, setIsDismissed] = useState(false);

    function removeBadge() {
      setIsDismissed(true);
    }

    const rootClassName = clsx(
      componentVariants.root,
      componentVariants.size[size],
      componentVariants.intent[intent][color],
      className
    );

    // Destroy component if dismissed
    if (isDismissed) return null;

    return (
      // Component Markup
      <Tag ref={ref} onClick={onClick} className={rootClassName} {...rest}>
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
