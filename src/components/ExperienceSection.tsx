
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ExperienceItemProps {
  date: string;
  company: string;
  title: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ date, company, title, description }) => {
  return (
    <div className="mb-12 relative pl-8 border-l-2 border-teal-500">
      <div className="timeline-dot">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
      <div className="ml-6">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{date}</p>
        <h3 className="text-xl font-bold mb-1">{company}</h3>
        <h4 className="text-lg font-semibold text-teal-600 mb-3">{title}</h4>
        <Card>
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const experiences = [
  {
    date: "2024 - Present",
    company: "Upcore Technologies",
    title: "Frontend Developer",
    description: [
      "Developed React-based UI components and reusable modules",
      "Implemented REST APIs with Node.js for seamless data flow",
      "Created AI PoCs including auto-blog generator & Slack-integrated tools",
      "Built FastAPI backends with Streamlit UIs for data visualization"
    ]
  },
  {
    date: "2023",
    company: "Instep Technologies",
    title: "React Developer",
    description: [
      "Developed Job Portal for Geekspotters with complex filtering",
      "Built dynamic applications using React & Node.js",
      "Conducted code reviews and mentored junior team members",
      "Delivered projects under tight deadlines with polished UI"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <ExperienceItem {...experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
