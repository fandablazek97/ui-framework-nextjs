import clsx from "clsx";
import { forwardRef } from "react";

function XMarkIcon({ ...props }: { [x: string]: any }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

type CloseButtonProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "inherit";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  root: "flex items-center aspect-square shrink-0 justify-center relative isolate cursor-pointer group/close-button",
  transition: "transition duration-200",
  radius: "rounded-full",
  size: {
    root: {
      xs: "p-0.5",
      sm: "p-1.5",
      md: "p-2",
      lg: "p-2.5",
      xl: "p-3.5",
      inherit: "p-[0.2em]",
    },
    icon: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "w-10 h-10",
      inherit: "h-[1em] w-[1em]",
    },
  },
};

const CloseButton = forwardRef<Ref, CloseButtonProps>(
  (
    {
      // Component props
      size = "md",
      className = "",
      onClick,
      ...rest
    },
    ref
  ) => {
    // Component logic
    return (
      // Component Markup
      <button
        ref={ref}
        onClick={onClick}
        className={clsx(
          componentVariants.root,
          componentVariants.transition,
          componentVariants.size.root[size],
          className
        )}
        aria-label="Zavřít"
        {...rest}
      >
        <XMarkIcon
          aria-hidden="true"
          className={clsx(
            componentVariants.size.icon[size],
            "translate-x-0 transform-gpu"
          )}
        />
        <span
          className={clsx(
            componentVariants.radius,
            "group-hover/close-button:opacity-15 absolute top-1/2 left-1/2 aspect-square h-auto w-full -translate-x-1/2 -translate-y-1/2 bg-current opacity-0 transition-opacity duration-200"
          )}
        ></span>
      </button>
    );
  }
);

export type Ref = HTMLButtonElement;

CloseButton.displayName = "CloseButton";

export default CloseButton;
