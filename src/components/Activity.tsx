
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Github, GitCommit, ExternalLink, RefreshCw } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import GitHubActivityChart from "@/components/GitHubActivityChart";
import { formatDistanceToNow } from "date-fns";

// Type definitions for GitHub API responses
interface GitHubCommit {
  id: string;
  repo: {
    name: string;
    url: string;
  };
  message: string;
  createdAt: string;
  url: string;
}

interface GitHubContribution {
  value: number;
  intensity: number;
  date: Date;
}

const Activity = () => {
  const [username, setUsername] = useState("dong-suu"); // Default to the user's GitHub username
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [contributions, setContributions] = useState<GitHubContribution[]>([]);
  const [recentCommits, setRecentCommits] = useState<GitHubCommit[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    fetchGitHubData(username);
  }, [username]);

  const fetchGitHubData = async (user: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch contribution data
      const contributionsData = await fetchContributionData(user);
      setContributions(contributionsData.contributions);
      setTotalContributions(contributionsData.totalContributions);
      
      // Fetch recent commits
      const commitsData = await fetchRecentCommits(user);
      setRecentCommits(commitsData);
      
      setLoading(false);
      
      toast({
        title: "GitHub data loaded",
        description: `Showing activity for ${user}`,
      });
    } catch (err) {
      setError("Failed to fetch GitHub data. Please try again.");
      setLoading(false);
      console.error("Error fetching GitHub data:", err);
    }
  };

  // Fetch contribution data (simulated - replace with real API call if you have a token)
  const fetchContributionData = async (user: string) => {
    // For demo purposes, we'll generate random data
    // In a real app, you would use the GitHub API with a token
    const contributions: GitHubContribution[] = [];
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
    
    const totalContributions = contributions.reduce((acc, curr) => acc + curr.value, 0);
    
    return { contributions, totalContributions };
  };
  
  // Fetch recent commits (simulated - replace with real API call if you have a token)
  const fetchRecentCommits = async (user: string) => {
    // For demo purposes, we'll use simulated data
    // In a real app, you would use the GitHub GraphQL API with a token as shown in your example
    
    return [
      {
        id: "1",
        repo: {
          name: "portfolio-website",
          url: `https://github.com/${user}/portfolio-website`
        },
        message: "Update layout and fix responsive issues",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
        url: `https://github.com/${user}/portfolio-website/commit/abc123`
      },
      {
        id: "2",
        repo: {
          name: "awesome-project",
          url: `https://github.com/${user}/awesome-project`
        },
        message: "Add dark mode support",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
        url: `https://github.com/${user}/awesome-project/commit/def456`
      },
      {
        id: "3",
        repo: {
          name: "portfolio-website",
          url: `https://github.com/${user}/portfolio-website`
        },
        message: "Fix typo in about section",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
        url: `https://github.com/${user}/portfolio-website/commit/ghi789`
      },
      {
        id: "4",
        repo: {
          name: "api-service",
          url: `https://github.com/${user}/api-service`
        },
        message: "Implement caching layer",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
        url: `https://github.com/${user}/api-service/commit/jkl012`
      },
    ];
  };

  // Function to implement actual GitHub API if you have a token
  // Uncomment and use this if you have a GitHub token
  /*
  const fetchWithGitHubAPI = async (user: string) => {
    const GITHUB_TOKEN = "YOUR_GITHUB_TOKEN"; // Replace with your token or use env variable
    
    // GraphQL query similar to your example
    const query = `
      {
        user(login: "${user}") {
          repositories(first: 5, orderBy: {field: UPDATED_AT, direction: DESC}) {
            nodes {
              name
              url
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 5) {
                      edges {
                        node {
                          oid
                          message
                          committedDate
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  weekday
                  color
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    
    // Process contributions data
    const calendarData = data?.data?.user?.contributionsCollection?.contributionCalendar;
    const totalContributions = calendarData?.totalContributions || 0;
    
    const contributions: GitHubContribution[] = [];
    calendarData?.weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        // Convert color to intensity (0-4)
        let intensity = 0;
        if (day.contributionCount > 0) {
          // GitHub uses color intensity, we'll simplify to 5 levels
          intensity = Math.min(4, Math.ceil(day.contributionCount / 4));
        }
        
        contributions.push({
          value: day.contributionCount,
          intensity,
          date: new Date(day.date)
        });
      });
    });
    
    // Process commits data
    const repositories = data?.data?.user?.repositories?.nodes || [];
    const commits: GitHubCommit[] = [];
    
    repositories.forEach(repo => {
      const edges = repo.defaultBranchRef?.target?.history?.edges || [];
      edges.forEach(edge => {
        commits.push({
          id: edge.node.oid,
          repo: {
            name: repo.name,
            url: repo.url
          },
          message: edge.node.message,
          createdAt: edge.node.committedDate,
          url: edge.node.url
        });
      });
    });
    
    // Sort commits by date
    commits.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    return {
      contributions,
      totalContributions,
      commits
    };
  };
  */

  const handleRefresh = () => {
    fetchGitHubData(username);
  };

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
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Showing data for <span className="font-medium">{username}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefresh} 
            disabled={loading}
            className="flex items-center gap-1"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Refresh
          </Button>
        </div>
        
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
          <GitHubActivityChart 
            contributions={contributions}
            totalContributions={totalContributions}
            loading={loading}
          />
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
