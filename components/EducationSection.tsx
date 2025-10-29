"use client";

export function EducationSection() {
  const education = [
    {
        level: "B.Tech in Computer Science and Engineering",
        institution:
          "Indian Institute of Information Technology Dharwad (IIIT Dharwad)",
        details: "CGPA: 8.18",
        year: "2024",
      },
    {
      level: "Pre-University (+1 and +2)",
      institution: "Ambika PU College, Puttur (PCMB)",
      details: "Percentage: 91.33%",
      year: "2019",
    },
    {
        level: "Class 1 to 10",
        institution: "Jnanagange Residential School (CBSE)",
        details: "CGPA: 9.8",
        year: "2017",
      },
 
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6 py-20"
    >
      <div className="max-w-4xl w-full">

        <div className="relative border-l-2 border-white/20 ml-4">
          {education.map((edu, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Glowing Dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-sky-400/80 shadow-[0_0_15px_#38bdf8]"></span>

              <div className=" backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-[0_0_20px_#38bdf8] transition-all duration-300 ease-in-out">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {edu.level}
                </h3>
                <p className="text-sky-400 font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-gray-300">{edu.details}</p>
                <p className="text-gray-400 text-sm mt-2">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
