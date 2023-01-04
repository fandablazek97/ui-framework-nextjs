import clsx from "clsx";

//
// **** Sub component ****
type TemplatePartProps = {
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export function TemplatePart({
  children,
  className = "",
  ...props
}: TemplatePartProps) {
  return (
    <div className={clsx(className)} {...props}>
      {children}
    </div>
  );
}

//
// **** Main component ****
type TemplateMultipleProps = {
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

export function TemplateMultiple({
  children,
  className = "",
  ...props
}: TemplateMultipleProps) {
  return (
    <div className={clsx(className)} {...props}>
      {children}
    </div>
  );
}

// Exports
export default TemplateMultiple;
TemplateMultiple.Part = TemplatePart;
