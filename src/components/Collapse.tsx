// Not using Headless UI Disclosure component,
// because it can't be properly animated even with framer-motion.
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

function ChevronDownIcon({ ...props }: { [x: string]: any }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

//
// Collapse Group component
type CollapseGroupProps = {
  children:
    | React.ReactElement<typeof Collapse>
    | React.ReactElement<typeof Collapse>[];
  className?: string;
  [x: string]: any;
};

export function CollapseGroup({
  children,
  className = "",
  ...props
}: CollapseGroupProps) {
  return (
    <div className={className} {...props}>
      <div className="divide-gray-900/15 dark:divide-white/15 flex flex-col divide-y">
        {children}
      </div>
    </div>
  );
}

//
// Collapse component
type CollapseProps = {
  title: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6 | "none";
  isDefaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export function Collapse({
  title,
  titleLevel = 3,
  isDefaultOpen = false,
  children,
  className = "",
  ...props
}: CollapseProps) {
  // Opening and closing state
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  // Generate unique ids for aria
  const triggerId = useId();
  const panelID = useId();

  // Resolve title level
  let Tag = `h${titleLevel}` as keyof JSX.IntrinsicElements;
  if (titleLevel === "none") Tag = "div";

  return (
    <div className={clsx(className)} {...props}>
      {/* Title and trigger button */}
      <Tag className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          id={"collapse-trigger-" + triggerId}
          aria-controls={"collapse-panel-" + panelID}
          aria-expanded={isOpen ? "true" : "false"}
          className="flex w-full items-center justify-between py-4 text-gray-900 hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <span className="block w-full text-left text-base font-semibold transition-colors duration-300 sm:text-lg">
            {title}
          </span>
          <ChevronDownIcon
            className={clsx(
              "h-5 w-5 shrink-0 origin-center transition duration-300 ease-out",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </Tag>

      {/* Content panel */}
      <div
        id={"collapse-panel-" + panelID}
        role="region"
        aria-labelledby={"collapse-trigger-" + triggerId}
        aria-hidden={isOpen ? "false" : "true"}
        className="overflow-hidden"
      >
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              exit={{ height: 0, opacity: 0 }}
              className=""
            >
              <div className="pt-2 pb-6">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Exports
export default Collapse;
Collapse.Group = CollapseGroup;
