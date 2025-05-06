import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="rounded-full overflow-hidden w-48 h-58 mx-auto border-4 border-teal-500">
              <img
                src="/dp.jpeg"
                alt="Gopal Noutiyal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-4">
                  I'm a frontend developer with hands-on experience in crafting
                  dynamic web applications using React.js, Next.js, and Node.js.
                  With a strong foundation in UI/UX principles and growing
                  expertise in AI-driven tools (Azure OpenAI, LangChain), I
                  build user-friendly, performance-optimized digital
                  experiences.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I love collaborating on tech projects that challenge the norm
                  and elevate user engagement. My focus is on creating clean,
                  efficient code that delivers exceptional user experiences.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-lg font-semibold text-teal-600">
                      Location
                    </h3>
                    <p>Mohali, India</p>
                  </div>
                  <div className="text-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-lg font-semibold text-teal-600">
                      Experience
                    </h3>
                    <p>2+ Years</p>
                  </div>
                  <div className="text-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <h3 className="text-lg font-semibold text-teal-600">
                      Passion
                    </h3>
                    <p>Web Apps, AI</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
