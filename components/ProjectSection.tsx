"use client";

import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website built with Next.js, MUI, and Tailwind.",
    image: "portfolio.png ",
    link: "https://github.com/Amruth56/portfolio",
  },
  {
    title: "QR Code Scanner",
    description: "A mobile 1st web app that scans and generates QR codes instantly.",
    image: "QR_scanner.png",
    link: "https://github.com/Amruth56/QR-scanner",
  },
  {
    title: "PR Script",
    description: "Writes the description for github pull request from the commit messages.",
    image: "https://picsum.photos/400/250?random=3",
    link: "https://github.com/Amruth56/prScript",
  },
  {
    title: "Picture in Picture Extension",
    description: "A Chrome extension for watching videos in floating mini windows.",
    image: "https://picsum.photos/400/250?random=4",
    link: "https://github.com/Amruth56/picture-in-picture",
  },
  {
    title: "Chess Game",
    description: "An interactive chess game built with React and JavaScript logic.",
    image: "Chess.png",
    link: "https://github.com/Amruth56?tab=repositories&q=chess&type=&language=&sort=",
  },
  {
    title: "WeMeet – Let's Connect",
    description: "A real-time video chat app powered by WebRTC and Socket.io.",
    image: "https://picsum.photos/400/250?random=6",
    link: "https://github.com/Amruth56/We_meet",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#0a0a0f] to-[#12121a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          My <span className="text-sky-400">Projects</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Card
                className="bg-[#1c1c26] border border-gray-700 rounded-2xl shadow-lg hover:shadow-sky-500/30 transition-all duration-300 overflow-hidden"
                sx={{
                  backdropFilter: "blur(6px)",
                }}
              >
                <div className="overflow-hidden">
                  {/* <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    className="max-h-50 object-cover group-hover:scale-110 transition-transform duration-500"
                  /> */}
                </div>
                <CardContent className="bg-[#161b22]">
                  <Typography
                    variant="h6"
                    className="font-semibold mb-2 text-white group-hover:text-sky-400 transition-colors"
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-400 mb-4">
                    {project.description}
                  </Typography>
                  <div className="flex mt-4 justify-center">
                  <Button
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    className="!bg-transparent !border !border-transparent hover:!border-sky-500/60 transition-[border-color] duration-[3000ms] ease-in-out"

                  >
                    View Project
                  </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
