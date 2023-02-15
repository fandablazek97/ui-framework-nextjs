// Radix UI component docs: https://www.radix-ui.com/docs/primitives/components/separator
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import clsx from "clsx";

type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  color?: "inherit" | "primary" | "secondary" | "white" | "black";
  disableOpacity?: boolean;
  isDecorative?: boolean;
  className?: string;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  root: "",
  orientation: {
    horizontal:
      "data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-px",
    vertical:
      "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
  },
  color: {
    inherit: "bg-current",
    primary: "bg-primary",
    secondary: "bg-secondary",
    white: "bg-white",
    black: "bg-black",
  },
};

export default function Separator({
  // Component props
  orientation = "horizontal",
  color = "inherit",
  disableOpacity = false,
  isDecorative = true,
  className = "",
  ...rest
}: SeparatorProps) {
  // Component logic
  return (
    // Component markup
    <SeparatorPrimitive.Root
      orientation={orientation}
      decorative={isDecorative}
      className={clsx(
        componentVariants.orientation[orientation],
        componentVariants.color[color],
        disableOpacity ? "" : "opacity-40",
        className
      )}
      {...rest}
    />
  );
}
