"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Education", "Projects", "Work", "Contact"];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
            <Image
              src="/profile.jpg"
              alt="Amruth"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="text-white font-semibold text-lg tracking-wide">
            Amruth
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-white/80 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-sky-400 transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              {item}
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/1nAlIszuoyQEDNlLKeRlDPlgtRS52ie9Q/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-1.5 rounded-full border border-sky-500/40 text-sky-400 bg-sky-500/10 hover:bg-sky-500/20 transition-all duration-300 ease-in-out"
          >
            Resume
          </a>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#0a0a0f]/90 border-t border-white/10 rounded-b-full animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-sky-400 text-lg font-medium transition-all duration-300 ease-in-out"
            >
              {item}
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/1nAlIszuoyQEDNlLKeRlDPlgtRS52ie9Q/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-5 py-2 rounded-full border border-sky-500/40 text-sky-400 bg-sky-500/10 hover:bg-sky-500/20 transition-all duration-300 ease-in-out"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
