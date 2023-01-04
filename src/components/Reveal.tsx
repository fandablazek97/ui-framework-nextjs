import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  delay?: number;
  noVertical?: boolean;
  hasTriggerMargin?: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function Reveal({
  delay,
  noVertical = false,
  hasTriggerMargin = false,
  children,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // Return only div if user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: noVertical ? 0 : 24 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, margin: hasTriggerMargin ? "-128px" : "0px" }}
      transition={{
        duration: 0.9,
        delay: delay || 0,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
