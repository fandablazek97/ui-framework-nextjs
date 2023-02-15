import clsx from "clsx";
import { useId } from "react";
import { RxExclamationTriangle } from "react-icons/rx";

type TextInputProps = {
  type?: "text" | "tel" | "email" | "url";
  name?: string;
  label: string;
  isLabelHidden?: boolean;
  placeholder?: string;
  helperText?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  errorText?: string;
  intent?: "filled" | "outlined";
  className?: string;
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
const componentVariants = {
  base: "form-input block w-full py-2.5 px-2.5 text-sm outline-none focus:ring-[3px] border",
  transition: "transition duration-200 ease-in-out",
  radius: "rounded-md",
  label:
    "mb-2 block max-w-max text-sm font-medium text-gray-700 dark:text-gray-200",
  placeholder: "opacity-80",
  intent: {
    filled:
      "text-gray-700 dark:text-gray-100 bg-gray-200 dark:bg-gray-700/60 focus:bg-transparent dark:focus:bg-transparent border-gray-200 dark:border-gray-700/60 focus:border-primary-600 dark:focus:border-primary-400 focus:ring-primary/50",
    outlined:
      "text-gray-700 dark:text-gray-100 bg-transparent border-gray-300 dark:border-gray-600 focus:border-primary-600 dark:focus:border-primary-400 focus:ring-primary/50",
  },
  floatingLabel: {
    container: "",
    input: "",
    label: "",
  },
  isInvalid: "!border-error focus:!ring-error/50",
};

export default function TextInput({
  type = "text",
  name = "input_name",
  label = "Label",
  isLabelHidden = false,
  placeholder = "Placeholder",
  helperText,
  isRequired = false,
  isInvalid = false,
  errorText,
  intent = "filled",
  className = "",
  ...props
}: TextInputProps) {
  const id = useId();

  const inputClassName = clsx(
    componentVariants.base,
    componentVariants.transition,
    componentVariants.radius,
    componentVariants.placeholder,
    componentVariants.intent[intent],
    isInvalid && componentVariants.isInvalid,
    className
  );
  return (
    <div className={clsx(className)}>
      <label
        htmlFor={id}
        className={clsx(isLabelHidden && "sr-only", componentVariants.label)}
      >
        {label}
        {isRequired && <span className="text-error"> *</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={isRequired}
          {...props}
          className={inputClassName}
        />
        {isInvalid && (
          <RxExclamationTriangle
            aria-hidden="true"
            className="text-error absolute inset-y-0 right-4 m-auto"
          />
        )}
      </div>
      {helperText && !isInvalid && <p className="mt-2 text-sm">{helperText}</p>}
      {isInvalid && errorText && (
        <p className="text-error mt-2 text-sm">{errorText}</p>
      )}
    </div>
  );
}
