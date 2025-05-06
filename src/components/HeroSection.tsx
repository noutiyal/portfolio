import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=3882&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="section-container z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Gopal Noutiyal</span>
            <span className="gradient-text">Frontend Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Transforming ideas into interactive, scalable web apps with
            AI-enhanced features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Gopal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button className="bg-teal-600 hover:bg-teal-700 px-8 py-6 text-lg">
                View My Resume
              </Button>
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/noutiyal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="w-12 h-12">
                  <Github className="h-6 w-6" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/gopal-noutiyal-15a025278/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="w-12 h-12">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
