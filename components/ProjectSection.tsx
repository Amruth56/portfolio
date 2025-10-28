"use client";

import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website built with Next.js, MUI, and Tailwind.",
    image: "https://picsum.photos/400/250?random=1",
    link: "#",
  },
  {
    title: "QR Code Scanner",
    description: "A web app that scans and generates QR codes instantly.",
    image: "https://picsum.photos/400/250?random=2",
    link: "#",
  },
  {
    title: "PR Script",
    description: "Automates pull request creation and updates with one command.",
    image: "https://picsum.photos/400/250?random=3",
    link: "#",
  },
  {
    title: "Picture in Picture Extension",
    description: "A Chrome extension for watching videos in floating mini windows.",
    image: "https://picsum.photos/400/250?random=4",
    link: "#",
  },
  {
    title: "Chess Game",
    description: "An interactive chess game built with React and JavaScript logic.",
    image: "https://picsum.photos/400/250?random=5",
    link: "#",
  },
  {
    title: "WeMeet – Let's Connect",
    description: "A real-time video chat app powered by WebRTC and Socket.io.",
    image: "https://picsum.photos/400/250?random=6",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#0a0a0f] to-[#12121a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          My <span className="text-indigo-500">Projects</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Card
                className="bg-[#1c1c26] border border-gray-700 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 overflow-hidden"
                sx={{
                  backdropFilter: "blur(6px)",
                }}
              >
                <div className="overflow-hidden">
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent>
                  <Typography
                    variant="h6"
                    className="font-semibold mb-2 text-white group-hover:text-indigo-400 transition-colors"
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-400 mb-4">
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    href={project.link}
                    target="_blank"
                    className="!bg-indigo-600 hover:!bg-indigo-700 transition-all duration-300"
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
