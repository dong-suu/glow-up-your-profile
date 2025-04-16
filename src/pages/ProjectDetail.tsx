
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectData = {
  'droppy': {
    title: 'Droppy',
    date: 'January 25, 2025',
    role: 'Creator & Developer',
    description: 'An apple alternative on browser for devices connected to the same internet connection, ranked #11 on Product Hunt, with 1,900+ X impressions.',
    techStack: ['Next.js', 'TailwindCSS', 'DeepChat SDK'],
    details: [
      'Developed a browser-based file sharing solution',
      'Implemented real-time file transfer capabilities',
      'Integrated with modern web APIs for seamless connectivity',
      'Achieved significant user engagement on Product Hunt'
    ]
  },
  'coachbots': {
    title: 'Frontend Web Engineer @ Coachbots',
    date: 'November 2023 - Present',
    role: 'Frontend Engineer',
    description: 'Working on the frontend of an AI coaching platform.',
    techStack: ['Next.js', 'TailwindCSS', 'DeepChat SDK', 'Gemini API', 'OpenAI API'],
    details: [
      'Built the chatbot using DeepChat SDK',
      'Integrated Gemini and OpenAI APIs',
      'Added streaming support',
      'Contributed to 800+ tasks and 700+ commits'
    ]
  },
  'noteverse': {
    title: 'Noteverse',
    date: 'November 2024',
    role: 'Developer',
    description: 'A note-taking application with markdown support.',
    techStack: ['React', 'TypeScript', 'TailwindCSS'],
    details: [
      'Built a modern note-taking application',
      'Implemented markdown support',
      'Created a responsive and intuitive UI',
      'Added real-time preview functionality'
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id as keyof typeof projectData];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-[#F1F0FB] via-[#E5DEFF] to-[#D3E4FD] dark:from-[#1A1F2C] dark:via-[#221F26] dark:to-[#403E43] text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-white/20 dark:hover:bg-black/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {project ? (
            <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl p-8 shadow-lg">
              <motion.h1 
                className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6E59A5]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h1>
              
              <motion.div 
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.date} • {project.role}
              </motion.div>

              <motion.p 
                className="text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {project.description}
              </motion.p>

              <motion.div 
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-xl font-semibold mb-4">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#9B87F5]/10 text-[#9B87F5] text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-xl font-semibold mb-4">Key Achievements</h2>
                <ul className="space-y-3">
                  {project.details.map((detail, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <span className="text-[#9B87F5]">•</span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ) : (
            <motion.div 
              className="bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-lg flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6E59A5]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                No More Information Available
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Additional details for this project haven't been added yet. Please check back later or explore other projects.
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
