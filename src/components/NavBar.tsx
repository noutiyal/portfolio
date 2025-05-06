import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-bold text-teal-600">GN</div>
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
            >
              Contact
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/noutiyal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/gopal-noutiyal-15a025278/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="hidden md:block bg-teal-600 hover:bg-teal-700"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
