"use client";
import Image from "next/image";

export function HeaderComponent() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left: Profile */}
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
          <span className="text-white font-semibold text-lg tracking-wide">Amruth</span>
        </div>

        {/* Center: Navigation */}
        <nav className=" md:flex space-x-8 text-white/80 font-medium">
          {["About", "Education", "Projects", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-sky-400 transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              {item}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
