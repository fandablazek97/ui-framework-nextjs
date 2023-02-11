// Radix UI component docs: https://www.radix-ui.com/docs/primitives/components/toast
import * as ToastPrimitive from "@radix-ui/react-toast";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useId } from "react";
import CloseButton from "../CloseButton";

// ToDo
// - update logic to be more reusable

type NotificationProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title?: string;
  content: string;
  durationMs?: number;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "neutral"
    | "white"
    | "gray"
    | "black";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

  className?: string;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  root: "px-5 py-3 w-full shadow-xl dark:shadow-none",
  colors: {
    primary: "bg-primary text-primary-content",
    secondary: "bg-secondary text-secondary-content",
    success: "bg-success text-success-content",
    warning: "bg-warning text-warning-content",
    error: "bg-error text-error-content",
    neutral: "bg-neutral text-neutral-content",
    white: "bg-white text-gray-700",
    gray: "bg-gray-600 text-white",
    black: "bg-gray-900 text-white",
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
};

export default function Notification({
  // Component props
  open,
  onOpenChange,
  title,
  content,
  durationMs = 3000,
  color = "gray",
  radius = "xl",
  className = "",
  ...rest
}: NotificationProps) {
  // Component logic
  const notificationId = useId();
  return (
    // Component markup
    <AnimatePresence initial={false}>
      {open ? (
        <ToastPrimitive.Root
          open={open}
          onOpenChange={onOpenChange}
          type="foreground"
          duration={durationMs}
          asChild
          forceMount
          {...rest}
        >
          <motion.li
            key={notificationId}
            initial={{ opacity: 0, y: "-64px" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: "-64px",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            className={clsx(
              className,
              componentVariants.root,
              componentVariants.colors[color],
              componentVariants.radius[radius]
            )}
          >
            <div className="grid grid-cols-5">
              <div className="col-span-4 flex flex-col items-start justify-center gap-1">
                {title && (
                  <ToastPrimitive.Title className="text-lg font-semibold">
                    {title}
                  </ToastPrimitive.Title>
                )}
                <ToastPrimitive.Description className="text-sm">
                  {content}
                </ToastPrimitive.Description>
              </div>

              <div className="col-span-1 flex h-full items-center justify-end">
                <ToastPrimitive.Close asChild aria-label="Zavřít">
                  <CloseButton />
                </ToastPrimitive.Close>
              </div>
            </div>
          </motion.li>
        </ToastPrimitive.Root>
      ) : null}
    </AnimatePresence>
  );
}
