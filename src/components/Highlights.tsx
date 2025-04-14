
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Highlights = () => {
  const projects = [
    {
      id: 1,
      logo: "🔄",
      name: "Droppy",
      description: "An apple alternative on browser for devices connected to the same internet connection, ranked #11 on Product Hunt, with 1,900+ X impressions.",
      date: "January 25, 2025",
    },
    {
      id: 2,
      logo: "C",
      name: "Frontend Web Engineer @ Coachbots",
      description: "Working on the frontend of an AI coaching platform.",
      date: "November 2023 - Present",
      isCurrent: true,
    },
    {
      id: 3,
      logo: "N",
      name: "Noteverse",
      description: "A note-taking application with markdown support.",
      date: "November 2024",
    },
    {
      id: 4,
      logo: "🏢",
      name: "Frontend Web Developer Intern @ AkeefandCo",
      description: "Worked on various frontend projects using React and Vue.js.",
      date: "December 2022 - January 2023",
    },
    {
      id: 5,
      logo: "🎓",
      name: "Bachelors of Computer Applications (BCA)",
      description: "Graduated with a degree in Computer Applications.",
      date: "September 2020 - September 2023",
    },
  ];

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <Card className="overflow-hidden border bg-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <motion.div 
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-muted text-foreground font-bold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.logo}
                </motion.div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      {project.date}
                      {project.isCurrent && (
                        <motion.span 
                          className="px-2 py-1 text-xs bg-green-500/10 text-green-500 rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                        >
                          Present
                        </motion.span>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 text-muted-foreground">{project.description}</p>
                  
                  {project.id === 1 && (
                    <div className="mt-2">
                      <motion.button 
                        className="text-sm inline-flex items-center text-primary hover:underline"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Read more <ArrowRight className="ml-1 h-3 w-3" />
                      </motion.button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Highlights;
