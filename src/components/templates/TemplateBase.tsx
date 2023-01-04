import clsx from "clsx";

type TemplateBaseProps = {
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

export default function TemplateBase({
  as: Tag = "div",
  className = "",
  children,
  onClick,
  ...rest
}: TemplateBaseProps) {
  return (
    <Tag onClick={onClick} className={clsx(className)} {...rest}>
      {children}
    </Tag>
  );
}
