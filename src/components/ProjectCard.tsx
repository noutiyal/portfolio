
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  impact: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

const ProjectCard = ({
  title,
  description,
  impact,
  image,
  technologies,
  demoLink,
  codeLink
}: ProjectCardProps) => {
  return (
    <Card className="project-card h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="sm" className="bg-teal-600 hover:bg-teal-700">
                  <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                </Button>
              </a>
            )}
            {codeLink && (
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-white text-gray-800 hover:bg-gray-100">
                  <Github className="h-4 w-4 mr-2" /> View Code
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
        <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-4">{impact}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
