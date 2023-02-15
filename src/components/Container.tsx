import clsx from "clsx";

type ContainerProps = {
  as?: React.ElementType;
  size?: "xs" | "sm" | "md" | "lg" | "fluid";
  py?: "none" | "sm" | "md" | "lg" | "xl";
  pt?: "none" | "sm" | "md" | "lg" | "xl";
  pb?: "none" | "sm" | "md" | "lg" | "xl";
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
  py: {
    none: "",
    sm: "py-8 sm:py-12 xl:py-16",
    md: "py-12 sm:py-16 xl:py-24",
    lg: "py-20 sm:py-28 xl:py-36",
    xl: "py-28 sm:py-36 xl:py-44",
  },
  pt: {
    none: "",
    sm: "pt-8 sm:pt-12 xl:pt-16",
    md: "pt-12 sm:pt-16 xl:pt-24",
    lg: "pt-20 sm:pt-28 xl:pt-36",
    xl: "pt-28 sm:pt-36 xl:pt-44",
  },
  pb: {
    none: "",
    sm: "pb-8 sm:pb-12 xl:pb-16",
    md: "pb-12 sm:pb-16 xl:pb-24",
    lg: "pb-20 sm:pb-28 xl:pb-36",
    xl: "pb-28 sm:pb-36 xl:pb-44",
  },
};

export default function Container({
  as: Tag = "div",
  size = "md",
  py = "none",
  pt = "none",
  pb = "none",
  className = "",
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={clsx(
        componentVariants.root,
        componentVariants.size[size],
        pt === "none" && pb === "none"
          ? componentVariants.py[py]
          : componentVariants.pt[pt] + " " + componentVariants.pb[pb],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
