// Radix UI component docs: https://www.radix-ui.com/docs/primitives/components/toast
import * as ToastPrimitive from "@radix-ui/react-toast";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useId } from "react";
import CloseButton from "./CloseButton";

type NotificationProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title?: string;
  content: string;
  durationMs?: number;

  variant?: "filled" | "subtle";
  color?:
    | "primary"
    | "secondary"
    | "neutral"
    | "success"
    | "error"
    | "warning"
    | "info";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";

  className?: string;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  root: "p-5 shadow-xl dark:shadow-none",
  variants: {
    filled: {
      primary: "bg-primary text-primary-content",
      secondary: "bg-secondary text-secondary-content",
      neutral: "bg-neutral text-neutral-content",
      success: "bg-success text-success-content",
      error: "bg-error text-error-content",
      warning: "bg-warning text-warning-content",
      info: "bg-info text-info-content",
    },
    subtle: {
      primary:
        "bg-primary-effect/10 backdrop-blur-lg text-primary ring-1 ring-inset ring-primary/20",
      secondary:
        "bg-secondary-effect/10 backdrop-blur-lg text-secondary ring-1 ring-inset ring-secondary/20",
      neutral:
        "bg-neutral-effect/10 backdrop-blur-lg text-neutral ring-1 ring-inset ring-neutral/20",
      success:
        "bg-success-effect/10 backdrop-blur-lg text-success ring-1 ring-inset ring-success/20",
      error:
        "bg-error-effect/10 backdrop-blur-l text-error ring-1 ring-inset ring-error/20",
      warning:
        "bg-warning-effect/10 backdrop-blur-lg text-warning ring-1 ring-inset ring-warning/20",
      info: "bg-info-effect/10 backdrop-blur-lg text-info ring-1 ring-inset ring-info/20",
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
};

export default function Notification({
  // Component props
  open,
  onOpenChange,
  title,
  content,
  durationMs = 3000,
  variant = "filled",
  color = "primary",
  radius = "lg",
  className = "",
  ...rest
}: NotificationProps) {
  // Component logic
  const uniqueId = useId();
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
            key={uniqueId}
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: "50%",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            drag="x"
            dragConstraints={{ right: 500, left: 0 }}
            className={clsx(
              className,
              componentVariants.root,
              componentVariants.radius[radius],
              componentVariants.variants[variant][color]
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
