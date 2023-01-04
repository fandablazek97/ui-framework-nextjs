import clsx from "clsx";

type TemplateSimpleProps = {
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

// Component Variant Styles
// const componentVariants = {
//   base: "",
//   prop: {
//     value: "",
//     value: "",
//     value: "",
//   },
// }

export default function TemplateSimple({
  className = "",
  children,
  ...rest
}: TemplateSimpleProps) {
  return (
    <div className={clsx(className)} {...rest}>
      {children}
    </div>
  );
}
