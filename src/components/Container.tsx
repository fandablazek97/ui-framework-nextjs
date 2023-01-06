import clsx from "clsx";

type ContainerProps = {
  as?: React.ElementType;
  size?: "xs" | "sm" | "md" | "lg" | "fluid";
  verticalPadding?: "none" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  root: "mx-auto w-[calc(100%-32px)] md:w-[calc(100%-64px)]",
  size: {
    xs: "max-w-2xl",
    sm: "max-w-4xl",
    md: "max-w-7xl",
    lg: "max-w-[1728px]",
    fluid: "",
  },
  verticalPadding: {
    none: "",
    sm: "py-8 sm:py-12 xl:py-16",
    md: "py-12 sm:py-16 xl:py-24",
    lg: "py-20 sm:py-28 xl:py-36",
    xl: "py-28 sm:py-36 xl:py-44",
  },
};

export default function Container({
  as: Tag = "div",
  size = "md",
  verticalPadding = "none",
  className = "",
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={clsx(
        componentVariants.root,
        componentVariants.size[size],
        componentVariants.verticalPadding[verticalPadding],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
