// Todo: Add all props to tabs components
import { Tab as TabPrimitive } from "@headlessui/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Fragment } from "react";

export function Tab({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TabPrimitive as={Fragment}>
      {({ selected }) => (
        <button
          className={clsx(
            "relative flex items-center justify-center px-4 py-2 [&:not(:focus-visible)]:focus:outline-none",
            className
          )}
        >
          {selected && (
            <motion.div
              layoutId="tabBackground"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full rounded-[36px] border border-body-100 bg-body dark:border-none dark:bg-gray-100"
            ></motion.div>
          )}
          <span
            className={clsx(
              "z-10 font-semibold transition-colors duration-300 ease-out",
              selected
                ? "text-content-strong dark:text-gray-800"
                : "text-content"
            )}
          >
            {children}
          </span>
        </button>
      )}
    </TabPrimitive>
  );
}

export function TabList({ children }: { children: React.ReactNode }) {
  return (
    <TabPrimitive.List className="flex space-x-2 rounded-full bg-body-50 p-1.5">
      {children}
    </TabPrimitive.List>
  );
}

export function TabPanel({ children }: { children: React.ReactNode }) {
  return <TabPrimitive.Panel>{children}</TabPrimitive.Panel>;
}

export function TabPanels({ children }: { children: React.ReactNode }) {
  return (
    <TabPrimitive.Panels className={"mt-6"}>{children}</TabPrimitive.Panels>
  );
}

export function TabGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TabPrimitive.Group as={"div"} className={clsx(className)}>
      {children}
    </TabPrimitive.Group>
  );
}

export default Tab;
Tab.Panels = TabPanels;
Tab.Panel = TabPanel;
Tab.List = TabList;
Tab.Group = TabGroup;
