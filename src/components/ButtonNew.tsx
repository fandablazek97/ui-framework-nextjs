import Loader from "@components/Loader";
import clsx from "clsx";
import NextLink from "next/link";
import type { UrlObject } from "url";

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

  variant?:
    | "filled"
    | "tinted"
    | "outlined"
    | "plain"
    | "gray"
    | "destructive"
    | "unstyled";
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "default" | "none" | "sm" | "md" | "lg" | "full";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
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
  transition: "transition",
  variants: {
    filled: "text-primary-content bg-primary hover:bg-primary-hover",
    tinted: "text-primary bg-primary/10 hover:bg-primary/20",
    outlined:
      "text-primary ring-1 ring-primary hover:text-primary-content hover:bg-primary",
    plain: "text-primary hover:bg-primary/15",
    gray: "text-body ring-1 ring-body-muted hover:bg-surface-100 hover:ring-body",
    destructive: "text-error bg-error/10 hover:bg-error/20",
    unstyled: "",
  },
  sizes: {
    sm: "py-1 px-2 text-xs leading-5 md:py-1.5 md:px-3",
    md: "py-1.5 px-3 text-xs leading-5 md:py-2.5 md:px-4 md:text-sm md:leading-5",
    lg: "py-2.5 px-4 text-sm leading-5 md:py-3 md:px-5 md:text-base md:leading-6",
    xl: "py-3 px-5 text-base leading-6 md:py-4 md:px-6 md:text-lg md:leading-6",
  },
  radius: {
    default: "rounded",
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-xl",
    full: "rounded-full",
  },
  fullWidth: "w-full",
  // Used for disabled and loading states
  isDisabled: "pointer-events-none opacity-50",
};

export default function Button({
  href = "",
  children,

  variant = "filled",
  size = "md",
  radius = "default",
  leftIcon,
  rightIcon,
  isFullWidth = false,

  isLoading = false,
  isDisabled = false,
  isFocusable = true,

  className = "",
  ...props
}: ButtonProps) {
  // Classes of main root component
  // Static variant
  const rootClassName = clsx(
    componentVariants.root,
    componentVariants.transition,
    componentVariants.variants[variant],
    componentVariants.sizes[size],
    componentVariants.radius[radius],
    isFullWidth && componentVariants.fullWidth,
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
