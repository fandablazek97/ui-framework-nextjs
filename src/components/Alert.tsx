import clsx from "clsx";
import { forwardRef, useState } from "react";
import CloseButton from "./CloseButton";

function SuccessIcon({
  className = "",
  ...props
}: {
  className?: string;
  [x: string]: any;
}) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function ErrorIcon({
  className = "",
  ...props
}: {
  className?: string;
  [x: string]: any;
}) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function WarningIcon({
  className = "",
  ...props
}: {
  className?: string;
  [x: string]: any;
}) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function InfoIcon({
  className = "",
  ...props
}: {
  className?: string;
  [x: string]: any;
}) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

type AlertProps = {
  children?: React.ReactNode;
  title: string;
  status?: "success" | "error" | "warning" | "info" | "neutral";
  variant?: "filled" | "subtle";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  hasIcon?: boolean;
  isDismissable?: boolean;
  isVisible?: boolean;
  className?: string;
  [x: string]: any;
};

const componentVariants = {
  base: "flex w-full items-start justify-between gap-5 rounded-lg py-5 px-4",
  variants: {
    filled: {
      success: "bg-success text-success-content",
      error: "bg-error text-error-content",
      warning: "bg-warning text-warning-content",
      info: "bg-info text-info-content",
      neutral: "bg-neutral text-neutral-content",
    },
    subtle: {
      success:
        "bg-success-effect/10 text-success ring-1 ring-inset ring-success/20",
      error: "bg-error-effect/10 text-error ring-1 ring-inset ring-error/20",
      warning:
        "bg-warning-effect/10 text-warning ring-1 ring-inset ring-warning/20",
      info: "bg-info-effect/10 text-info ring-1 ring-inset ring-info/20",
      neutral:
        "bg-neutral-effect/10 text-neutral ring-1 ring-inset ring-neutral/20",
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

const Alert = forwardRef<Ref, AlertProps>(
  (
    {
      // Component props
      children,
      title = "This is alert message",
      status = "info",
      variant = "filled",
      hasIcon = true,
      radius = "2xl",
      isDismissable = true,
      isVisible = true,
      className = "",
      ...rest
    },
    ref
  ) => {
    // Component logic
    const [isShown, setIsShown] = useState(isVisible);

    function hideAlert() {
      setIsShown(false);
    }
    return isShown ? (
      <div
        ref={ref}
        className={clsx(
          componentVariants.base,
          componentVariants.variants[variant][status],
          componentVariants.radius[radius],
          className
        )}
        {...rest}
      >
        <div className="mr-auto flex flex-col items-start justify-start gap-3 sm:flex-row">
          {hasIcon && status === "info" && (
            <div className="hidden xs:block sm:pt-1">
              <InfoIcon aria-hidden="true" className="h-6 w-6" />
            </div>
          )}
          {hasIcon && status === "success" && (
            <div className="hidden xs:block sm:pt-1">
              <SuccessIcon aria-hidden="true" className="h-6 w-6" />
            </div>
          )}
          {hasIcon && status === "warning" && (
            <div className="hidden xs:block sm:pt-1">
              <WarningIcon aria-hidden="true" className="h-6 w-6" />
            </div>
          )}
          {hasIcon && status === "error" && (
            <div className="hidden xs:block sm:pt-1">
              <ErrorIcon aria-hidden="true" className="h-6 w-6" />
            </div>
          )}
          {hasIcon && status === "neutral" && (
            <div className="hidden xs:block sm:pt-1">
              <InfoIcon aria-hidden="true" className="h-6 w-6" />
            </div>
          )}
          <div>
            <div className="text-lg font-semibold">{title}</div>
            <div>{children}</div>
          </div>
        </div>
        {isDismissable && <CloseButton size="sm" onClick={hideAlert} />}
      </div>
    ) : null;
  }
);

export type Ref = HTMLDivElement;

Alert.displayName = "Alert";

export default Alert;
