import clsx from "clsx";

// Future ToDo
// - implement custom label prop

type LoaderProps = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inherit";
  thickness?: "1" | "2" | "3" | "4" | "5" | "inherit";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "neutral";
};

// Component Variant Styles
const componentVariants = {
  size: {
    xs: "h-4 w-4",
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "w-16 h-16",
    "2xl": "w-20 h-20",
    inherit: "h-[1em] w-[1em]",
  },
  thickness: {
    1: "border-1",
    2: "border-2",
    3: "border-3",
    4: "border-4",
    5: "border-5",
    inherit: "border-[0.125em]",
  },
  color: {
    inherit: "border-current",
    primary: "border-primary",
    secondary: "border-secondary",
    success: "border-success",
    warning: "border-warning",
    error: "border-error",
    neutral: "border-neutral",
  },
};

export default function Loader({
  className = "",
  size = "inherit",
  thickness = "inherit",
  color = "inherit",
}: LoaderProps) {
  return (
    <div className={`${className}`}>
      <div
        aria-label="načítání..."
        className={clsx("relative", componentVariants.size[size])}
      >
        <div
          className={clsx(
            "absolute origin-center animate-[spin_0.7s_linear_infinite] rounded-full border-dashed border-r-transparent border-l-transparent border-b-transparent opacity-25",
            componentVariants.size[size],
            componentVariants.thickness[thickness],
            componentVariants.color[color]
          )}
        ></div>
        <div
          className={clsx(
            "absolute origin-center animate-[spin_0.7s_ease_infinite] rounded-full border-r-transparent border-l-transparent border-b-transparent",
            componentVariants.size[size],
            componentVariants.thickness[thickness],
            componentVariants.color[color]
          )}
        ></div>
      </div>
    </div>
  );
}
