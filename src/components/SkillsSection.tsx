
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Github,
  Code,
  FileCode, 
  Database,
  Server,
  Image,
  FileText
} from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: { name: string; icon: React.ReactNode }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-center text-teal-600">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <Card key={index} className="card-hover text-center">
            <CardContent className="py-6">
              <div className="skill-icon text-teal-500">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React.js", icon: <Code className="w-full h-full" /> },
    { name: "Next.js", icon: <Image className="w-full h-full" /> },
    { name: "TypeScript", icon: <FileCode className="w-full h-full" /> },
    { name: "Tailwind CSS", icon: <Image className="w-full h-full" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FileText className="w-full h-full" /> },
    { name: "Flask", icon: <FileText className="w-full h-full" /> },
    { name: "FastAPI", icon: <FileText className="w-full h-full" /> },
  ];

  const cloudSkills = [
    { name: "Azure", icon: <Image className="w-full h-full" /> },
    { name: "Docker", icon: <Server className="w-full h-full" /> },
  ];

  const databaseSkills = [
    { name: "MongoDB", icon: <Database className="w-full h-full" /> },
    { name: "PostgreSQL", icon: <Database className="w-full h-full" /> },
    { name: "ChromaDB", icon: <FileText className="w-full h-full" /> },
    { name: "Faiss", icon: <FileText className="w-full h-full" /> },
  ];

  const otherSkills = [
    { name: "Git", icon: <Github className="w-full h-full" /> },
    { name: "Vector Search", icon: <FileText className="w-full h-full" /> },
    { name: "Streamlit", icon: <FileText className="w-full h-full" /> },
    { name: "LangChain", icon: <FileText className="w-full h-full" /> },
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <SkillCategory title="Frontend" skills={frontendSkills} />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <SkillCategory title="Backend" skills={backendSkills} />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <SkillCategory title="Cloud" skills={cloudSkills} />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <SkillCategory title="Databases" skills={databaseSkills} />
          </div>
          <div className="animate-fade-in md:col-span-2" style={{ animationDelay: "0.5s" }}>
            <SkillCategory title="Other Tools & Technologies" skills={otherSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
