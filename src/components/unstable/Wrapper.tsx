import clsx from "clsx";

// ToDo
// - rename component to "Container"
// - Rewrite component to be simpler

type WrapperProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "fluid";
  paddedContent?: "sm" | "md" | "lg" | "xl" | "none";
  paddedContentTop?: "sm" | "md" | "lg" | "xl" | "none";
  paddedContentBottom?: "sm" | "md" | "lg" | "xl" | "none";
  className?: string;
  [x: string]: any;
};

const componentVariants = {
  base: "mx-auto w-[calc(100%-60px)]",
  size: {
    sm: "max-w-3xl",
    md: "max-w-7xl",
    lg: "max-w-[1728px]",
    fluid: "",
  },
  paddedContent: {
    sm: "py-12 sm:py-16 xl:py-20",
    md: "py-20 sm:py-24 xl:py-32",
    lg: "py-32 sm:py-40 xl:py-52",
    xl: "py-44 sm:py-56 xl:py-64",
    none: "",
  },
  paddedContentTop: {
    sm: "pt-12 sm:pt-16 xl:pt-20",
    md: "pt-20 sm:pt-24 xl:pt-32",
    lg: "pt-32 sm:pt-40 xl:pt-52",
    xl: "pt-44 sm:pt-56 xl:pt-64",
    none: "",
  },
  paddedContentBottom: {
    sm: "pb-12 sm:pb-16 xl:pb-20",
    md: "pb-20 sm:pb-24 xl:pb-32",
    lg: "pb-32 sm:pb-40 xl:pb-52",
    xl: "pb-44 sm:pb-56 xl:pb-64",
    none: "",
  },
};

export default function Wrapper({
  as: Tag = "div",
  size = "md",
  paddedContent = "none",
  paddedContentTop = "none",
  paddedContentBottom = "none",
  className = "",
  children,
  ...Props
}: WrapperProps) {
  return (
    <Tag
      className={clsx(
        componentVariants.base,
        componentVariants.size[size],
        paddedContentTop === "none" && paddedContentBottom === "none"
          ? componentVariants.paddedContent[paddedContent]
          : componentVariants.paddedContentTop[paddedContentTop] +
              " " +
              componentVariants.paddedContentBottom[paddedContentBottom],
        componentVariants.paddedContent[paddedContent],
        className
      )}
      {...Props}
    >
      {children}
    </Tag>
  );
}
