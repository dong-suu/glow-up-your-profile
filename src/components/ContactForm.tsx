
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, SendIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";

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

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <p className="text-lg mb-6">
          Want to get in touch? Feel free to reach out via
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <Button variant="outline" className="gap-2 justify-start">
            <Mail className="h-4 w-4" />
            work.portfolio@gmail.com
          </Button>
          
          <Button variant="outline" className="gap-2 justify-start">
            <Phone className="h-4 w-4" />
            +91 9148747200
          </Button>
        </div>
        
        <p className="text-muted-foreground">or use the form below.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
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
          </div>
          
          <div className="space-y-2">
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
          </div>
        </div>
        
        <div className="space-y-2">
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
        </div>
        
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting} className="gap-2">
            Send Message
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
