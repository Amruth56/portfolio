"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "HealthifyMe",
        role: "SDE Intern",
        period: "August 2025 – October 2025",
        tech: "React.js, Remix, TypeScript, Ant Design, Sentry",
        points: [
          "Built an internal testing dashboard using React.js, Remix, HTML, and Vanilla JavaScript to streamline QA workflows and wrote automated test cases.",
          "Closely monitored and resolved Sentry issues, improving production stability.",
          "Contributed to SEO optimization and performance improvements across key web properties.",
          "Led the design system upgrade (Ant Design v15 → v18) and migration from JavaScript to TypeScript, enhancing reliability and scalability.",
        ],
      },
 
  {
    company: "Skysecure Technologies",
    role: "Full Stack Developer Intern",
    period: "February 2025 – August 2025",
    tech: "Next.js, React.js, Node.js, MySQL, MongoDB, Tailwind",
    points: [
      "Built a full-stack marketplace using Next.js, React, Tailwind CSS, Mongoose, and Node.js, and currently developing its admin panel.",
      "Collaborated closely with backend developers for seamless API integration; also contributed as a shadow backend developer.",
      "Guided a front-end intern and maintained code quality within a 4-member cross-functional development team.",
      "Leveraged API testing tools to accelerate development and ensure reliable feature delivery.",
    ],
  },
  {
    company: "ProQSmart",
    role: "Full Stack Developer Intern",
    period: "August 2024 – January 2025",
    tech: "Angular 12, Bootstrap, StoryBook, PrimeNG, NgRx, RxJS",
    points: [
      "Worked on developing 15+ key features as part of team initiatives and startup projects.",
      "Part of a team that formulated a website using Angular12, Bootstrap, StoryBook, PrimeNg, NgRx, RxJS, improving user engagement.",
      "Integrated 20+ APIs, conducted 60+ test cases, resolved bugs, and facilitated UI/UX improvements, achieving a 20% reduction in deployment time.",
    ],
  },
 
];

export default function ExperienceSection() {
  return (
    <section id="work" className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#111827] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-sky-400">Work</span> Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
            key={index}
            className="relative overflow-hidden backdrop-blur-lg border border-white/10 rounded-2xl shadow-md hover:border-sky-500/60 transition-all duration-300 ease-in-out group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 blur-2xl bg-sky-500/10"></div>
            </div>
              <CardContent className="p-6 bg-[#161b22]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <Typography variant="h6" className="font-semibold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-sky-700" /> {exp.company}
                  </Typography>
                  <Typography variant="body2" className="text-gray-300">
                    {exp.period}
                  </Typography>
                </div>

<div className="flex justify-between items-center mb-2">
                <Typography variant="subtitle1" className="text-sky-400 font-medium mb-1">
                  {exp.role}
                </Typography>

                <p className="text-gray-300 italic text-xs"> {exp.tech}
                </p>
                </div>

                <ul className="list-disc list-inside text-gray-200 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="hover:text-indigo-400 transition-colors duration-200">
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
