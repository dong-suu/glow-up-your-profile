
import React from "react";

interface Contribution {
  value: number;
  intensity: number;
  date: Date;
}

interface GitHubActivityChartProps {
  contributions: Contribution[];
  totalContributions: number;
}

const GitHubActivityChart: React.FC<GitHubActivityChartProps> = ({ 
  contributions, 
  totalContributions 
}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="grid grid-cols-52 gap-1">
        {Array.from({ length: 7 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-col gap-1">
            {Array.from({ length: 52 }).map((_, colIndex) => {
              const index = rowIndex + colIndex * 7;
              const contribution = contributions[index];
              
              return index < contributions.length ? (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm transition-colors ${
                    contribution.value > 0
                      ? `bg-green-500 bg-opacity-${
                          contribution.intensity === 0 ? "10" : 
                          contribution.intensity === 1 ? "30" : 
                          contribution.intensity === 2 ? "50" : 
                          contribution.intensity === 3 ? "70" : "90"
                        }`
                      : "bg-muted bg-opacity-20"
                  }`}
                  title={`${contribution.value} contributions on ${contribution.date.toDateString()}`}
                />
              ) : null;
            })}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
        <div>{totalContributions} contributions in the last year</div>
        <div className="flex items-center gap-1">
          <span>Less</span>
          <div className="w-3 h-3 rounded-sm bg-muted bg-opacity-20"></div>
          <div className="w-3 h-3 rounded-sm bg-green-500 bg-opacity-30"></div>
          <div className="w-3 h-3 rounded-sm bg-green-500 bg-opacity-50"></div>
          <div className="w-3 h-3 rounded-sm bg-green-500 bg-opacity-70"></div>
          <div className="w-3 h-3 rounded-sm bg-green-500 bg-opacity-90"></div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubActivityChart;
