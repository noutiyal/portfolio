
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Oragen Dashboard",
    description: "Voice intelligence tool for healthcare calls",
    impact: "Built real-time dashboards & flagged critical patient issues for rapid response",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Azure", "Speech-to-Text", "Graph Libraries"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Gen-AI Slack PoC",
    description: "Intelligent Slack bot with AI-driven responses",
    impact: "Enabled semantic searches & contextual responses across Slack channels",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    technologies: ["LangChain", "Azure OpenAI", "ChromaDB", "Neo4j"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Careconnexions Portal",
    description: "Role-based health content system",
    impact: "Developed secure multi-role interfaces for health professionals",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "MongoDB", "Role-based Auth"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Uniinsiders Platform",
    description: "Student resource & community platform",
    impact: "Optimized SEO and fast load performance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Server-side Rendering", "SEO"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Salesrook CRM",
    description: "Lead tracking & sales management tool",
    impact: "Automated workflows for smoother sales processes",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "Node.js", "Workflow Automation"],
    demoLink: "#",
    codeLink: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
