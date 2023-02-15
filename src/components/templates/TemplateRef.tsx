import clsx from "clsx";
import { forwardRef } from "react";

type TemplateRefProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

// Data array
// const templateArray = [
//   {
//     item: "Lorem ipsum",
//     value: "Lorem ipsum",
//   },
//   {
//     item: "Lorem ipsum",
//     value: "Lorem ipsum",
//   },
// ];

// Component Variant Styles
// const componentVariants = {
//   base: "",
//   prop: {
//     value: "",
//     value: "",
//     value: "",
//   },
// }

const TemplateRef = forwardRef<HTMLElement, TemplateRefProps>(
  (
    {
      // Component props
      as: Tag = "div",
      className = "",
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    // Component logic
    return (
      // Component Markup
      <Tag ref={ref} onClick={onClick} className={clsx(className)} {...rest}>
        {children}
      </Tag>
    );
  }
);

TemplateRef.displayName = "TemplateRef";
export default TemplateRef;
