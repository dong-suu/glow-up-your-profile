
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Github, GitCommit, ExternalLink } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useToast } from "@/hooks/use-toast";
import GitHubActivityChart from "@/components/GitHubActivityChart";
import { formatDistanceToNow } from "date-fns";

const Activity = () => {
  const [username, setUsername] = useState("octocat");
  const [inputUsername, setInputUsername] = useState("octocat");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contributions, setContributions] = useState<any[]>([]);
  const [recentCommits, setRecentCommits] = useState<any[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    fetchGitHubData(username);
  }, [username]);

  const fetchGitHubData = async (user: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate fetch for contributions data
      setTimeout(() => {
        // Generate random contribution data
        const simulatedContributions = generateContributions();
        setContributions(simulatedContributions);
        setTotalContributions(simulatedContributions.reduce((acc, curr) => acc + curr.value, 0));
        
        // Simulate fetch for recent commits
        const simulatedCommits = [
          {
            id: "1",
            repo: {
              name: "portfolio-website",
              url: "https://github.com/"+user+"/portfolio-website"
            },
            message: "Update layout and fix responsive issues",
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
            url: "https://github.com/"+user+"/portfolio-website/commit/abc123"
          },
          {
            id: "2",
            repo: {
              name: "awesome-project",
              url: "https://github.com/"+user+"/awesome-project"
            },
            message: "Add dark mode support",
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
            url: "https://github.com/"+user+"/awesome-project/commit/def456"
          },
          {
            id: "3",
            repo: {
              name: "portfolio-website",
              url: "https://github.com/"+user+"/portfolio-website"
            },
            message: "Fix typo in about section",
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
            url: "https://github.com/"+user+"/portfolio-website/commit/ghi789"
          },
          {
            id: "4",
            repo: {
              name: "api-service",
              url: "https://github.com/"+user+"/api-service"
            },
            message: "Implement caching layer",
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
            url: "https://github.com/"+user+"/api-service/commit/jkl012"
          },
        ];
        
        setRecentCommits(simulatedCommits);
        setLoading(false);
        
        toast({
          title: "GitHub data loaded",
          description: `Showing activity for ${user}`,
        });
      }, 1500);
    } catch (err) {
      setError("Failed to fetch GitHub data. Please try again.");
      setLoading(false);
      console.error("Error fetching GitHub data:", err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUsername.trim()) {
      setUsername(inputUsername.trim());
    }
  };

  // Generate random contribution data for the graph
  const generateContributions = () => {
    const contributions = [];
    const intensityLevels = 5; // 0-4 intensity levels
    
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
        date: new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000)
      });
    }
    
    return contributions;
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col space-y-4">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Github className="h-6 w-6" /> GitHub Activity
          </h2>
          <p className="text-muted-foreground">
            Track your open source contributions and recent commit history.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <Input
            placeholder="GitHub username"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            className="max-w-xs"
          />
          <Button type="submit" disabled={loading} variant="outline">
            {loading ? "Loading..." : "Fetch"}
          </Button>
        </form>
        
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>
      
      <div className="space-y-6">
        <div className="bg-card rounded-lg p-4 border">
          <h3 className="text-lg font-medium mb-4">Contribution Graph</h3>
          
          {loading ? (
            <Skeleton className="h-36 w-full" />
          ) : (
            <div className="w-full overflow-x-auto pb-4">
              <div className="flex text-xs text-muted-foreground justify-between mb-1 px-1">
                {months.map((month) => (
                  <div key={month} className="w-8 text-center">{month}</div>
                ))}
              </div>
              
              <GitHubActivityChart 
                contributions={contributions}
                totalContributions={totalContributions}
              />
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <GitCommit className="h-5 w-5" /> Recent Commits
          </h3>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-5">
                    <Skeleton className="h-4 w-2/3 mb-2" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <div className="flex justify-between items-center mt-2">
                      <Skeleton className="h-4 w-1/4" />
                      <Skeleton className="h-4 w-1/4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentCommits.map((commit) => (
                <Card key={commit.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4 text-muted-foreground" />
                      <div className="text-sm font-medium">{commit.repo.name}</div>
                    </div>
                    <div className="text-base mt-2 font-medium">{commit.message}</div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm text-muted-foreground">
                        {formatDistanceToNow(new Date(commit.createdAt), { addSuffix: true })}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs gap-1 h-8"
                        asChild
                      >
                        <a href={commit.url} target="_blank" rel="noopener noreferrer">
                          View <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activity;
