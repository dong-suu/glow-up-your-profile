
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

export type AnimatedElementProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  delay?: number;
};

export const FadeIn = ({ 
  children, 
  delay = 0, 
  ...props 
}: AnimatedElementProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.4, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideInFromRight = ({ 
  children, 
  delay = 0, 
  ...props 
}: AnimatedElementProps) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 30 }}
    transition={{ duration: 0.4, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const SlideInFromLeft = ({ 
  children, 
  delay = 0, 
  ...props 
}: AnimatedElementProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -30 }}
    transition={{ duration: 0.4, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ 
  children, 
  delay = 0, 
  ...props 
}: AnimatedElementProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export const AnimatePresence = motion.AnimatePresence;
