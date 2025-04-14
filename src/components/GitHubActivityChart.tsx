
import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

interface Contribution {
  value: number;
  intensity: number;
  date: Date;
}

interface GitHubActivityChartProps {
  contributions: Contribution[];
  totalContributions: number;
  loading: boolean;
}

const GitHubActivityChart: React.FC<GitHubActivityChartProps> = ({ 
  contributions, 
  totalContributions,
  loading
}) => {
  const { theme } = useTheme();
  
  if (loading) {
    return (
      <div className="w-full h-36 animate-pulse bg-muted rounded-md"></div>
    );
  }

  // Generate weeks (columns)
  const weeks = [];
  for (let i = 0; i < 52; i++) {
    const weekContributions = contributions.slice(i * 7, (i + 1) * 7);
    if (weekContributions.length > 0) {
      weeks.push(weekContributions);
    }
  }

  const getColorClass = (intensity: number) => {
    const baseClass = theme === "dark" ? "bg-green-500" : "bg-green-600";
    
    switch(intensity) {
      case 0: return "bg-muted bg-opacity-20";
      case 1: return `${baseClass} opacity-30`;
      case 2: return `${baseClass} opacity-50`;
      case 3: return `${baseClass} opacity-70`;
      case 4: return `${baseClass} opacity-90`;
      default: return "bg-muted bg-opacity-20";
    }
  };

  const getDayLabel = (index: number) => {
    switch(index) {
      case 0: return "Mon";
      case 1: return "Tue";
      case 2: return "Wed";
      case 3: return "Thu";
      case 4: return "Fri";
      case 5: return "Sat";
      case 6: return "Sun";
      default: return "";
    }
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Get month labels with positions
  const monthLabels = [];
  let currentMonth = -1;
  
  for (let i = 0; i < weeks.length; i++) {
    const date = weeks[i][0]?.date;
    if (date && date.getMonth() !== currentMonth) {
      currentMonth = date.getMonth();
      monthLabels.push({ 
        month: months[currentMonth], 
        position: i 
      });
    }
  }

  return (
    <motion.div 
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex mb-1 text-xs text-muted-foreground">
        {monthLabels.map((label, i) => (
          <motion.div 
            key={i} 
            className="absolute text-xs" 
            style={{ left: `${label.position * 15}px` }}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.3 }}
          >
            {label.month}
          </motion.div>
        ))}
      </div>
      
      <div className="flex mt-6 overflow-x-auto pb-4">
        <div className="flex flex-col mr-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.div 
              key={i}
              className="h-3 text-xs text-muted-foreground flex items-center justify-end pr-1" 
              style={{ width: '30px' }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.3 }}
            >
              {i % 2 === 1 && getDayLabel(i)}
            </motion.div>
          ))}
        </div>
        
        <div className="flex">
          {weeks.map((week, weekIndex) => (
            <motion.div 
              key={weekIndex} 
              className="flex flex-col gap-1 mr-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.01 * weekIndex, duration: 0.3 }}
            >
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const contribution = week[dayIndex];
                return (
                  <motion.div
                    key={dayIndex}
                    className={`w-3 h-3 rounded-sm ${contribution ? getColorClass(contribution.intensity) : "bg-muted bg-opacity-20"}`}
                    title={contribution ? `${contribution.value} contributions on ${contribution.date.toDateString()}` : "No contributions"}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="flex justify-between items-center mt-4 text-xs text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <div>{totalContributions} contributions in the last year</div>
        <div className="flex items-center gap-1">
          <span>Less</span>
          <motion.div className="w-3 h-3 rounded-sm bg-muted bg-opacity-20" whileHover={{ scale: 1.5 }}></motion.div>
          <motion.div className={`w-3 h-3 rounded-sm ${getColorClass(1)}`} whileHover={{ scale: 1.5 }}></motion.div>
          <motion.div className={`w-3 h-3 rounded-sm ${getColorClass(2)}`} whileHover={{ scale: 1.5 }}></motion.div>
          <motion.div className={`w-3 h-3 rounded-sm ${getColorClass(3)}`} whileHover={{ scale: 1.5 }}></motion.div>
          <motion.div className={`w-3 h-3 rounded-sm ${getColorClass(4)}`} whileHover={{ scale: 1.5 }}></motion.div>
          <span>More</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GitHubActivityChart;
