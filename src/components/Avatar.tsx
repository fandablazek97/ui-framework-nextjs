// Radix UI component docs: https://www.radix-ui.com/docs/primitives/components/avatar
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import clsx from "clsx";
import React from "react";

//
// Avatar group component
type AvatarGroupProps = {
  offset?: "sm" | "md" | "lg" | "xl";
  children:
    | React.ReactElement<typeof Avatar>
    | Array<React.ReactElement<typeof Avatar>>;
  [x: string]: any;
};

const offsetClasses = {
  sm: "-space-x-1",
  md: "-space-x-2",
  lg: "-space-x-4",
  xl: "-space-x-8",
};

export function AvatarGroup({
  offset = "md",
  children,
  ...props
}: AvatarGroupProps) {
  return (
    <div {...props}>
      <div className={clsx("flex overflow-hidden", offsetClasses[offset])}>
        {children}
      </div>
    </div>
  );
}

//
// Avatar component
type AvatarProps = {
  src?: string;
  name: string;
  loading?: "eager" | "lazy";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  ringWidth?: "none" | "sm" | "md" | "lg";
  ringColor?:
    | "none"
    | "inherit"
    | "white"
    | "black"
    | "primary"
    | "secondary"
    | "neutral";
  className?: string;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  root: "inline-flex select-none items-center justify-center overflow-hidden align-middle relative isolate",
  size: {
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10",
    lg: "h-12 w-12 text-lg",
    xl: "h-16 w-16 text-xl",
    "2xl": "h-20 w-20 text-2xl",
  },
  radius: {
    none: "rounded-none",
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  },
  ringWidth: {
    none: "",
    sm: "ring-2 ring-inset",
    md: "ring-4 ring-inset",
    lg: "ring-8 ring-inset",
  },
  ringColor: {
    none: "",
    inherit: "ring-current",
    white: "ring-white",
    black: "ring-black",
    primary: "ring-primary",
    secondary: "ring-secondary",
    neutral: "ring-neutral",
  },
};

export function Avatar({
  src,
  name = "John Doe",
  loading = "lazy",
  size = "md",
  radius = "full",
  ringColor = "none",
  ringWidth = "none",
  className = "",
  ...rest
}: AvatarProps) {
  // Get initials from the first and last name and save them in a variable
  const initials = name
    .split(" ")
    .map((n, i) => (i === 0 || i === name.split(" ").length - 1 ? n[0] : ""))
    .join("");

  return (
    <AvatarPrimitive.Root
      className={clsx(
        componentVariants.root,
        componentVariants.size[size],
        componentVariants.radius[radius],
        className
      )}
      {...rest}
    >
      <AvatarPrimitive.Image
        src={src}
        alt={name}
        loading={loading}
        className="h-full w-full object-cover"
      />
      <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center bg-content text-[1em] font-semibold leading-none text-content-inverted">
        {initials}
      </AvatarPrimitive.Fallback>

      {ringWidth !== "none" && (
        <span
          className={clsx(
            "absolute inset-0 z-10 h-full w-full",
            componentVariants.radius[radius],
            componentVariants.ringWidth[ringWidth],
            componentVariants.ringColor[ringColor]
          )}
        ></span>
      )}
    </AvatarPrimitive.Root>
  );
}

export default Avatar;
Avatar.Group = AvatarGroup;
