// components/TechStackSection.tsx
"use client";

import { Card, CardContent } from "@mui/material";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function TechStackSection() {
  const skills = [
    { name: "React.js", icon: <SiReact className="w-7 h-7" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-7 h-7" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-7 h-7" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-7 h-7" /> },
    { name: "HTML", icon: <SiHtml5 className="w-7 h-7" /> },
    { name: "CSS", icon: <SiCss3 className="w-7 h-7" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-7 h-7" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-7 h-7" /> },
    { name: "Express.js", icon: <SiExpress className="w-7 h-7" /> },
    { name: "MySQL", icon: <SiMysql className="w-7 h-7" /> },
    { name: "AWS", icon: <FaAws  className="w-7 h-7" /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#111827] text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-sky-400">Tech</span> Stack
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I’ve worked with while building and shipping real-world projects.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group relative  rounded-2xl  backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:-translate-y-1"
            >
              <CardContent className="hover:-translate-y-1 bg-[#0d1117] relative flex flex-col items-center justify-center p-6 space-y-3">
                <div className="group-hover:scale-110 transition-transform duration-300 text-sky-400">
                  {skill.icon}
                </div>
                <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
                  {skill.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
