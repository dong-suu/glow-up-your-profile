
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
      className="w-full max-w-3xl mx-auto"
    >
      <div className="bg-background/80 dark:bg-black/90 rounded-3xl overflow-hidden backdrop-blur-xl border border-border dark:border-white/10">
        {/* Header */}
        <div className="p-4 md:p-6 pb-4">
          <div className="flex justify-between items-center text-muted-foreground mb-4">
            <span>Frontend Engineer</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{currentTime}</span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-3 mb-2">
            <img 
              src="/lovable-uploads/e5b7e8c8-1c86-4264-8574-fc707bb2616c.png"
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-border dark:border-white/10"
            />
            <div>
              <h2 className="text-xl font-semibold">Mohammed Falah</h2>
              <div className="flex items-center gap-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-sm">Available for work</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Button 
              variant="secondary" 
              className="w-full bg-secondary/80 dark:bg-white/10 hover:bg-secondary dark:hover:bg-white/20 dark:text-white border-0"
              onClick={() => window.location.href = '#contact'}
            >
              <Plus className="w-4 h-4 mr-2" />
              Hire Me
            </Button>
            <Button
              variant="secondary"
              className="w-full bg-secondary/80 dark:bg-white/10 hover:bg-secondary dark:hover:bg-white/20 dark:text-white border-0"
              onClick={handleCopyEmail}
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Email
            </Button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 dark:from-green-500/20 dark:to-green-500/10 p-4 flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
          <Zap className="w-5 h-5" />
          <span>Currently High on Creativity</span>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroCard;
