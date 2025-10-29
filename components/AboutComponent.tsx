"use client";

export function AboutComponent() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-20"
    >
      <div className="max-w-4xl text-center md:text-left mt-8">

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg">
          <p className="text-lg leading-relaxed mb-4 text-gray-200">
            I’m <span className="text-sky-400 font-semibold">Amruth Mandappa T S</span>, a passionate{" "}
            <span className="text-sky-400 font-semibold">Full Stack Developer</span> and 2024 graduate
            from <span className="font-medium">IIIT Dharwad</span>, specializing in Computer Science and Engineering.
            I love building modern, user-focused web experiences that blend creativity with clean and scalable code.
          </p>

          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            I’ve interned at <span className="font-medium text-sky-400">Healthifyme</span>,
            <span className="font-medium text-sky-400"> Skysecure Technologies</span>, and
            <span className="font-medium text-sky-400"> ProQsmart</span>, where I contributed to full-stack
            applications using HTML, CSS, JavaScript, TypeScript, AngularJS, React.js, Next.js, Tailwind CSS, Node.js, and AWS.
            My work includes upgrading design systems, enhancing performance, and debugging production issues with tools like Sentry.
          </p>

          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            Alongside my internships, I published research on 3D modelling workflows in IEEE as a Research Intern at
            <span className="font-medium text-sky-400"> IIIT Sri City</span>. I’ve also built several personal projects —
            from <span className="font-medium">WeMeet</span> (a peer-to-peer video chat app)
            to <span className="font-medium">QR Scanner</span> and <span className="font-medium">Budget Tracker</span> —
            all reflecting my passion for solving real-world problems through code.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            I’m driven by curiosity, collaboration, and a love for clean design — always eager to learn, experiment,
            and build meaningful digital products.
          </p>
        </div>
      </div>
    </section>
  );
}
