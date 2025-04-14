
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      className={cn("animate-pulse rounded-md bg-muted bg-opacity-30", className)}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      {...props}
    />
  )
}

export { Skeleton }
