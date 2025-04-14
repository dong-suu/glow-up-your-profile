
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Mail, Phone, Sun, Moon, ExternalLink } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import ProfileHeader from "@/components/ProfileHeader";
import Highlights from "@/components/Highlights";
import Activity from "@/components/Activity";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header with logo and theme toggle */}
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-semibold italic">portfolio.dev</h1>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </header>

        {/* Profile section */}
        <ProfileHeader />

        {/* Tabs for different sections */}
        <Tabs defaultValue="highlights" className="mt-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="highlights" className="mt-6">
            <Highlights />
          </TabsContent>
          <TabsContent value="activity" className="mt-6">
            <Activity />
          </TabsContent>
          <TabsContent value="contact" className="mt-6">
            <ContactForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
