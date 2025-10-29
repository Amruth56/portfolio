// components/ContactSection.tsx

"use client";

import { Card, CardContent } from "@mui/material";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6 text-white hover:text-sky-400 group-hover:text-white transition-colors" />,
    href: "https://www.linkedin.com/in/amruth-mandappa-t-s-48838a203",
    color: "bg-[#0077b5]",
  },
  {
    name: "GitHub",
    icon: <Github className="w-6 h-6 text-white hover:text-sky-400 group-hover:text-white transition-colors" />,
    href: "https://github.com/Amruth56",
    color: "bg-[#171515]",
  },
  {
    name: "Email",
    icon: <Mail className="w-6 h-6 text-white hover:text-sky-400 group-hover:text-white transition-colors" />,
    href: "mailto:amruth.coder56@gmail.com",
    color: "bg-[#1e293b]",
  },
  {
    name: "Twitter / X",
    icon: <Twitter className="w-6 h-6 text-white hover:text-sky-400 group-hover:text-white transition-colors" />,
    href: "https://x.com/Amruth_Mandappa",
    color: "bg-[#0f172a]",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6 text-white hover:text-sky-400 group-hover:text-white transition-colors" />,
    href: "https://instagram.com/gusto_muffin",
    color: "bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#0d1117] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Let’s <span className="text-sky-400">Connect</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          I’m always open to discussing new projects, opportunities, or creative collaborations.
          Feel free to reach out through any of the platforms below 👇
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-1"
            >
              {/* Blue Glow Layer */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 bg-sky-500/30"></div>

              <Card className="relative rounded-2xl border border-white/10 bg-[#161b22]/80 backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                <CardContent className=" bg-[#0d1117] flex flex-col items-center justify-center p-6 space-y-3">
                  <div className="flex items-center justify-center ">{item.icon}</div>
                  <p className="text-white font-medium group-hover:text-sky-400">{item.name}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
