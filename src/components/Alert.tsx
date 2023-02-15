import CloseButton from "@components/CloseButton";
import clsx from "clsx";
import { useState } from "react";
import {
  RxCheckCircled,
  RxCrossCircled,
  RxExclamationTriangle,
  RxInfoCircled,
} from "react-icons/rx";

type AlertProps = {
  children?: React.ReactNode;
  title?: string;
  status?: "success" | "warning" | "error" | "neutral";
  intent?: "filled" | "tinted";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  hasIcon?: boolean;
  customIcon?: JSX.Element;
  isDismissable?: boolean;
  isVisible?: boolean;
  className?: string;
  [x: string]: any;
};

const componentVariants = {
  root: "flex w-full items-start justify-between gap-5 rounded-lg py-5 px-4",
  intent: {
    filled: {
      success: "bg-success-600 text-success-50",
      warning: "bg-warning-600 text-warning-50",
      error: "bg-error-600 text-error-50",
      neutral: "bg-gray-600 text-gray-50",
    },
    tinted: {
      success:
        "bg-success-300/30 dark:bg-success-800/30 text-success-800 dark:text-success-200 ring-success/40 ring-1",
      warning:
        "bg-warning-300/30 dark:bg-warning-800/30 text-warning-800 dark:text-warning-200 ring-warning/40 ring-1",
      error:
        "bg-error-300/30 dark:bg-error-800/30 text-error-800 dark:text-error-200 ring-error/40 ring-1",
      neutral:
        "bg-gray-300/30 dark:bg-gray-800/30 text-gray-800 dark:text-gray-200 ring-gray-500/40 ring-1",
    },
  },
  radius: "rounded-xl",
};

const Icons = {
  success: RxCheckCircled,
  error: RxCrossCircled,
  warning: RxExclamationTriangle,
  neutral: RxInfoCircled,
};

export default function Alert({
  children,
  title,
  status = "success",
  intent = "tinted",
  hasIcon = true,
  customIcon,
  isDismissable = true,
  isVisible = true,
  className = "",
  ...rest
}: AlertProps) {
  // Resolve icon based on status prop
  const IconComponent = Icons[status];

  // State
  const [isShown, setIsShown] = useState(isVisible);

  function hideAlert() {
    setIsShown(false);
  }

  // Destroy component if close button is clicked
  if (!isShown) {
    return null;
  }
  return (
    <div
      className={clsx(
        componentVariants.root,
        componentVariants.intent[intent][status],
        componentVariants.radius,
        className
      )}
      {...rest}
    >
      <div className="mr-auto flex flex-col items-start justify-start gap-2 xs:gap-3 sm:flex-row lg:gap-5">
        {hasIcon && !customIcon ? (
          <div className="hidden xs:block sm:pt-1">
            <IconComponent aria-hidden="true" className="h-6 w-6" />
          </div>
        ) : (
          <div className="hidden h-6 w-6 xs:block sm:pt-1" aria-hidden="true">
            {customIcon}
          </div>
        )}
        <div>
          {title && <div className="text-lg font-semibold">{title}</div>}
          <div>{children}</div>
        </div>
      </div>
      {isDismissable && <CloseButton size="sm" onClick={hideAlert} />}
    </div>
  );
}
