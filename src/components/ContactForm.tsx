
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, SendIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactButtons = [
    {
      icon: <Mail className="h-4 w-4" />,
      text: "work.portfolio@gmail.com",
    },
    {
      icon: <Phone className="h-4 w-4" />,
      text: "+91 9148747200",
    },
  ];

  return (
    <motion.div 
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p 
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Want to get in touch? Feel free to reach out via
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          {contactButtons.map((button, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button variant="outline" className="gap-2 justify-start">
                {button.icon}
                {button.text}
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          or use the form below.
        </motion.p>
      </motion.div>
      
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <label htmlFor="name" className="block text-sm font-medium">
              Enter your name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background border-border"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <label htmlFor="email" className="block text-sm font-medium">
              Enter your email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background border-border"
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          <label htmlFor="message" className="block text-sm font-medium">
            Enter your message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Leave a Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="resize-none bg-background border-border"
          />
        </motion.div>
        
        <motion.div 
          className="flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
            <SendIcon className="h-4 w-4" />
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
