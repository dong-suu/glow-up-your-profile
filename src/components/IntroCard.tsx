
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Plus, Copy, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const IntroCard = () => {
  const { toast } = useToast();
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric',
    minute: '2-digit',
    hour12: true 
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('falahh@example.com');
    toast({
      title: "Email copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="bg-background/80 dark:bg-black/90 rounded-3xl overflow-hidden backdrop-blur-xl border border-border dark:border-white/10 font-primary">
        {/* Header */}
        <div className="p-4 md:p-8">
          <div className="flex justify-between items-center text-muted-foreground mb-4 md:mb-6">
            <span className="text-sm md:text-xl font-secondary">Frontend Engineer</span>
            <div className="flex items-center gap-1 md:gap-2">
              <Clock className="w-3 h-3 md:w-5 md:h-5" />
              <span className="text-sm md:text-xl font-secondary">{currentTime}</span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-3 md:gap-6 mb-3 md:mb-4">
            <img 
              src="/lovable-uploads/e5b7e8c8-1c86-4264-8574-fc707bb2616c.png"
              alt="Profile"
              className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-border dark:border-white/10"
            />
            <div>
              <h2 className="text-xl md:text-4xl font-semibold font-secondary">Mohammed Falah</h2>
              <div className="flex items-center gap-1 md:gap-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-xs md:text-lg font-primary">Available for work</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 mt-4 md:mt-6">
            <Button 
              variant="secondary" 
              className="w-full bg-secondary/80 dark:bg-white/10 hover:bg-secondary dark:hover:bg-white/20 dark:text-white border-0 text-sm md:text-lg font-primary py-1 md:py-2 h-auto"
              onClick={() => window.location.href = '#contact'}
            >
              <Plus className="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2" />
              Hire Me
            </Button>
            <Button
              variant="secondary"
              className="w-full bg-secondary/80 dark:bg-white/10 hover:bg-secondary dark:hover:bg-white/20 dark:text-white border-0 text-sm md:text-lg font-primary py-1 md:py-2 h-auto"
              onClick={handleCopyEmail}
            >
              <Copy className="w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2" />
              Copy Email
            </Button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-green-500 p-3 md:p-6 flex items-center justify-center gap-1 md:gap-2 text-white">
          <Zap className="w-4 h-4 md:w-6 md:h-6" />
          <span className="font-medium text-sm md:text-xl font-secondary">Currently High on Creativity</span>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroCard;
