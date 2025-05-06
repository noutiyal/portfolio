import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle the form submission here
    console.log("Form submitted");
    // Show a success message
    alert("Thank you for your message! I will get back to you soon.");
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Mohali, India
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      noutiyalgopal@gmail.com
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Social Profiles</p>
                    <div className="flex space-x-3 mt-2">
                      <a
                        href="https://github.com/noutiyal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon">
                          <Github className="h-5 w-5" />
                        </Button>
                      </a>
                      <a
                        href="https://linkedin.com/in/gopal-noutiyal-15a025278/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon">
                          <Linkedin className="h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" required />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={5} required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
