
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
      <Card className="w-32 h-32 p-1 rounded-xl overflow-hidden flex-shrink-0">
        <img 
          src="/lovable-uploads/e5b7e8c8-1c86-4264-8574-fc707bb2616c.png" 
          alt="Profile"
          className="w-full h-full object-cover rounded-lg"
        />
      </Card>
      
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl font-bold">Mohammed Falah</h1>
        <h2 className="text-xl text-muted-foreground mb-2">Frontend Engineer</h2>
        
        <p className="mb-4 text-muted-foreground">
          I'm a BCA graduate working at an AI-based coaching and mentoring SaaS startup. 
          I love building real-world solutions, like <span className="text-foreground font-medium">Droppy</span>.
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <Button variant="outline" size="sm" className="gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            @falahh_
          </Button>
          
          <Button variant="outline" size="sm" className="gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            @falahh6
          </Button>
          
          <Button variant="outline" size="sm" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
