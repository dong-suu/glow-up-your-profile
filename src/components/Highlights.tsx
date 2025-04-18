
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Highlights = () => {
  const projects = [
    {
      id: 'droppy',
      logo: "🔄",
      name: "Droppy",
      description: "An apple alternative on browser for devices connected to the same internet connection, ranked #11 on Product Hunt, with 1,900+ X impressions.",
      date: "January 25, 2025",
    },
    {
      id: 'coachbots',
      logo: "C",
      name: "Frontend Web Engineer @ Coachbots",
      description: "Working on the frontend of an AI coaching platform.",
      date: "November 2023 - Present",
      isCurrent: true,
    },
    {
      id: 'noteverse',
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
      className="space-y-3 w-full"
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
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
        >
          <Card className="overflow-hidden border-0 bg-background/50 dark:bg-black/50 hover:bg-background/80 dark:hover:bg-black/80 transition-colors backdrop-blur-sm w-full">
            <CardContent className="p-3 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <motion.div 
                  className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-muted text-foreground text-base md:text-2xl font-medium font-secondary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.logo}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1 md:mb-2">
                    <h3 className="text-sm md:text-2xl font-medium font-secondary truncate">{project.name}</h3>
                    <div className="text-xs md:text-lg text-muted-foreground flex items-center gap-1 md:gap-2 font-primary">
                      {project.date}
                      {project.isCurrent && (
                        <motion.span 
                          className="px-1 md:px-2 py-0.5 text-xs md:text-sm bg-green-500/10 text-green-500 rounded-full font-primary"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                        >
                          Present
                        </motion.span>
                      )}
                    </div>
                  </div>
                  {project.description && (
                    <p className="text-xs md:text-lg text-muted-foreground line-clamp-2 mb-1 md:mb-2 font-primary">{project.description}</p>
                  )}
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center text-xs md:text-lg text-primary hover:opacity-80 transition-opacity font-primary"
                  >
                    <motion.span 
                      className="inline-flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Read more <ArrowRight className="ml-1 h-2 w-2 md:h-4 md:w-4" />
                    </motion.span>
                  </Link>
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
