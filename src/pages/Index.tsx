
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
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("highlights");
  
  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="container mx-auto px-4 py-8 max-w-5xl"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header with logo and theme toggle */}
        <motion.header 
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-2xl font-semibold italic"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            portfolio.dev
          </motion.h1>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? 
                <motion.div initial={{ rotate: -30 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
                  <Sun className="h-5 w-5" />
                </motion.div> : 
                <motion.div initial={{ rotate: 30 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
                  <Moon className="h-5 w-5" />
                </motion.div>
              }
            </Button>
          </motion.div>
        </motion.header>

        {/* Profile section */}
        <ProfileHeader />

        {/* Tabs for different sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Tabs 
            defaultValue="highlights" 
            className="mt-8" 
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              {["highlights", "activity", "contact"].map((tab, index) => (
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                >
                  <TabsTrigger 
                    value={tab}
                    className="capitalize"
                  >
                    {tab}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="highlights" className="mt-6">
                  <Highlights />
                </TabsContent>
                <TabsContent value="activity" className="mt-6">
                  <Activity />
                </TabsContent>
                <TabsContent value="contact" className="mt-6">
                  <ContactForm />
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
