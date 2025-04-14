
import { Card, CardContent } from "@/components/ui/card";

const Activity = () => {
  // Generate random contribution data for the graph
  const generateContributions = () => {
    const contributions = [];
    const intensity = ["bg-opacity-10", "bg-opacity-30", "bg-opacity-50", "bg-opacity-70", "bg-opacity-90"];
    
    for (let i = 0; i < 364; i++) {
      const random = Math.random();
      let intensityIndex = 0;
      
      if (random > 0.9) intensityIndex = 4;
      else if (random > 0.8) intensityIndex = 3;
      else if (random > 0.7) intensityIndex = 2;
      else if (random > 0.6) intensityIndex = 1;
      
      contributions.push({
        value: random > 0.6 ? Math.floor(Math.random() * 5) + 1 : 0,
        intensity: intensityIndex,
      });
    }
    
    return contributions;
  };

  const contributions = generateContributions();
  const totalContributions = contributions.reduce((acc, curr) => acc + curr.value, 0);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const recentCommits = [
    {
      id: 1,
      project: "falah.me",
      title: "animated framer animations",
      date: "Mar 24, 2025",
    },
    {
      id: 2,
      project: "falah.me",
      title: "typo fix",
      date: "Mar 23, 2025",
    },
    {
      id: 3,
      project: "falah.me",
      title: "update dependencies",
      date: "Mar 22, 2025",
    },
    {
      id: 4,
      project: "falah.me",
      title: "fix responsive issues",
      date: "Mar 21, 2025",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-lg mb-4">
          This is the activity on my GitHub profile. It shows the recent commits and the contribution graph. You can see what I'm currently working on.
        </p>
        
        <div className="relative overflow-hidden">
          {/* Contribution graph */}
          <div className="w-full overflow-x-auto pb-4">
            <div className="flex text-xs text-muted-foreground justify-between mb-1 px-1">
              {months.map((month) => (
                <div key={month} className="w-8 text-center">{month}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-52 gap-1">
              {Array.from({ length: 7 }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex flex-col gap-1">
                  {Array.from({ length: 52 }).map((_, colIndex) => {
                    const index = rowIndex + colIndex * 7;
                    const contribution = contributions[index];
                    
                    return index < contributions.length ? (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-sm ${
                          contribution.value > 0
                            ? `bg-green-500 ${intensity[contribution.intensity]}`
                            : "bg-muted bg-opacity-20"
                        }`}
                        title={`${contribution.value} contributions`}
                      />
                    ) : null;
                  })}
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center mt-2 text-xs text-muted-foreground">
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
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Recent Commits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentCommits.map((commit) => (
            <Card key={commit.id} className="overflow-hidden">
              <CardContent className="p-5">
                <div className="text-sm font-medium">{commit.project}</div>
                <div className="text-base mt-1">{commit.title}</div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">{commit.date}</span>
                  <button className="text-xs text-primary hover:underline">See changes</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
