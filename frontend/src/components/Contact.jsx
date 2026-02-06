import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { submitContactMessage } from '../firebase/services';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactMessage(formData);

      toast({
        title: 'Message sent successfully!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-primary transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[rgb(var(--primary))] mx-auto rounded-full"></div>
          <p className="text-secondary mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-surface border border-color rounded-xl p-8 md:p-10 hover-lift animate-fade-in-up delay-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-primary text-sm font-medium flex items-center gap-2">
                <User size={16} />
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="bg-tertiary border-color text-primary placeholder:text-tertiary focus:border-[rgb(var(--primary))] transition-all duration-300"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-primary text-sm font-medium flex items-center gap-2">
                <Mail size={16} />
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="bg-tertiary border-color text-primary placeholder:text-tertiary focus:border-[rgb(var(--primary))] transition-all duration-300"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-primary text-sm font-medium flex items-center gap-2">
                <MessageSquare size={16} />
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or inquiry..."
                rows={6}
                className="bg-tertiary border-color text-primary placeholder:text-tertiary focus:border-[rgb(var(--primary))] transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-hover))] text-white py-6 text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
