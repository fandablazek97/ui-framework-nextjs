import clsx from "clsx";

type ProseProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export default function Prose({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: ProseProps) {
  return (
    <Tag className={clsx(className, "prose-ui prose")} {...rest}>
      {children}
    </Tag>
  );
}
