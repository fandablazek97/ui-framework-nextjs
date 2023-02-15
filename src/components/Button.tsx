import Loader from "@components/Loader";
import clsx from "clsx";
import NextLink from "next/link";
import type { UrlObject } from "url";

// ToDO:
// - Wrap component in forwardRef

// <ComponentTag> Notes:
// - Purpose of this component is only render <a> or <NextLink> or <button> with correct semantics
// based on `href` prop automatically and avoid code duplication.
type ComponentTagProps = {
  href: string | (string & UrlObject);
  [x: string]: any;
};

function ComponentTag({ href, ...props }: ComponentTagProps) {
  const isLink = href !== undefined && href !== "";
  const isInternalLink = isLink && href.startsWith("/");
  const isExternalLink = isLink && href.startsWith("http");

  if (isLink && isInternalLink) {
    return <NextLink href={href} {...props} />;
  }

  if (isLink && isExternalLink) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    );
  }

  if (isLink && !isInternalLink && !isExternalLink) {
    return <a href={href} {...props} />;
  }

  return <button {...props} />;
}

// Icon Component for Button
function ButtonIcon({
  children,
  isLoading,
  className,
}: {
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "z-10 translate-x-0 scale-110 transform-gpu opacity-80",
        isLoading && "invisible",
        className
      )}
    >
      {children}
    </span>
  );
}

type ButtonProps = Omit<React.ComponentProps<typeof NextLink>, "href"> & {
  href?: string | (string & UrlObject);
  children: React.ReactNode;

  intent?:
    | "primary"
    | "secondary"
    | "plain"
    | "destructive"
    | "gray"
    | "white"
    | "black";
  size?: "sm" | "md" | "lg" | "xl";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  isPill?: boolean;
  isFullWidth?: boolean;

  isLoading?: boolean;
  isDisabled?: boolean;
  isFocusable?: boolean;

  onClick?: () => void;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  root: "inline-flex gap-2 items-center justify-center font-medium no-underline overflow-hidden cursor-pointer",
  transition: "transition duration-300",
  intent: {
    primary: "text-primary-50 bg-primary hover:bg-primary-600",
    secondary:
      "text-primary-700 bg-primary-300 dark:text-primary-200 dark:bg-primary-700 bg-opacity-20 hover:bg-opacity-40 dark:bg-opacity-20 dark:hover:bg-opacity-40",
    plain:
      "text-primary-700 bg-primary-300 dark:text-primary-200 dark:bg-primary-700 bg-opacity-0 hover:bg-opacity-20 dark:bg-opacity-0 dark:hover:bg-opacity-20",
    destructive:
      "text-error-700 bg-error-300 dark:text-error-200 dark:bg-error-700 bg-opacity-20 hover:bg-opacity-40 dark:bg-opacity-20 dark:hover:bg-opacity-40",
    gray: "text-gray-700 bg-gray-400 dark:text-gray-200 dark:bg-gray-600 bg-opacity-20 hover:bg-opacity-40 dark:bg-opacity-20 dark:hover:bg-opacity-40",
    white: "text-gray-800 bg-white hover:bg-gray-300",
    black: "text-gray-50 bg-gray-900 hover:bg-gray-700",
  },
  size: {
    sm: "py-1 px-2 text-xs leading-5 md:py-1.5 md:px-3",
    md: "py-1.5 px-3 text-xs leading-5 md:py-2.5 md:px-4 md:text-sm md:leading-5",
    lg: "py-2.5 px-4 text-sm leading-5 md:py-3 md:px-5 md:text-base md:leading-6",
    xl: "py-3 px-5 text-base leading-6 md:py-4 md:px-6 md:text-lg md:leading-6",
  },
  radius: "rounded-md",
  isPill: "rounded-full",
  isFullWidth: "w-full",
  // Used for disabled and loading states
  isDisabled: "pointer-events-none opacity-50",
};

export default function Button({
  href = "",
  children,
  intent = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  isPill = false,
  isFullWidth = false,
  isLoading = false,
  isDisabled = false,
  isFocusable = true,
  className = "",
  ...props
}: ButtonProps) {
  // Classes of main root component
  const rootClassName = clsx(
    componentVariants.root,
    componentVariants.transition,
    componentVariants.intent[intent],
    componentVariants.size[size],
    isPill ? componentVariants.isPill : componentVariants.radius,
    isFullWidth && componentVariants.isFullWidth,
    (isLoading || isDisabled) && componentVariants.isDisabled,
    className
  );

  return (
    <ComponentTag
      href={href}
      aria-hidden={isDisabled || isLoading}
      disabled={isDisabled || isLoading}
      tabIndex={isDisabled || isLoading || !isFocusable ? -1 : 0}
      className={rootClassName}
      {...props}
    >
      {leftIcon && <ButtonIcon isLoading={isLoading}>{leftIcon}</ButtonIcon>}
      <span className={clsx("z-10", isLoading && "invisible")}>{children}</span>
      {rightIcon && <ButtonIcon isLoading={isLoading}>{leftIcon}</ButtonIcon>}
      {isLoading && (
        <Loader
          size="inherit"
          thickness="inherit"
          color="inherit"
          className="absolute inset-auto z-[1] m-auto translate-x-0 transform-gpu text-[1.4em]"
        />
      )}
    </ComponentTag>
  );
}
