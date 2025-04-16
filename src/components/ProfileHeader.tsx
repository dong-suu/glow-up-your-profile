
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import IntroCard from "./IntroCard";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <IntroCard />
      
      {/* Social Links */}
      <motion.div 
        className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {["Twitter", "GitHub", "Resume"].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex-grow md:flex-grow-0"
          >
            {item === "Twitter" && (
              <Button variant="outline" size="lg" className="gap-2 text-sm md:text-lg font-medium w-full md:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                @falahh_
              </Button>
            )}
            
            {item === "GitHub" && (
              <Button variant="outline" size="lg" className="gap-2 text-sm md:text-lg font-medium w-full md:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                @falahh6
              </Button>
            )}
            
            {item === "Resume" && (
              <Button variant="outline" size="lg" className="gap-2 text-sm md:text-lg font-medium w-full md:w-auto">
                <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
                Resume
              </Button>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProfileHeader;
