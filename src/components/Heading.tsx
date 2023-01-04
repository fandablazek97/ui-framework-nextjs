import clsx from "clsx";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6 | "none";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inherit";
  font?: "sans" | "serif" | "display" | "mono";
  color?: "strong" | "primary" | "secondary" | "inherit";
  hasMarginBottom?: boolean;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  base: "leading-[1.15] font-bold",
  size: {
    xs: "text-base",
    sm: "text-xl lg:text-2xl",
    md: "text-2xl sm:text-3xl lg:text-4xl",
    lg: "text-3xl sm:text-4xl lg:text-6xl",
    xl: "text-4xl sm:text-6xl lg:text-7xl",
    "2xl": "text-4xl sm:text-6xl md:text-7xl lg:text-8xl",
    inherit: "",
  },
  font: {
    sans: "font-sans",
    serif: "font-serif",
    display: "font-display",
    mono: "font-mono",
  },
  color: {
    strong: "text-content-strong",
    primary: "text-primary",
    secondary: "text-secondary",
    inherit: "",
  },
  marginBottom: "mb-[0.65em]",
};

export default function Heading({
  level = 2,
  size = "md",
  font = "sans",
  color = "strong",
  hasMarginBottom = false,
  className = "",
  children,
  ...rest
}: HeadingProps) {
  // Resolve the correct HTML tag
  let Tag = `h${level}` as keyof JSX.IntrinsicElements;
  if (level === "none") Tag = "div";
  return (
    <Tag
      className={clsx(
        className,
        componentVariants.base,
        componentVariants.size[size],
        componentVariants.font[font],
        componentVariants.color[color],
        hasMarginBottom && componentVariants.marginBottom
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
