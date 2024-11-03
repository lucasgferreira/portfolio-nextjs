"use client";

export default function SkillsSection({ skills }) {
  return (
    <section
      id="skills"
      className="mt-20 relative min-h-screen flex items-center justify-center"
    >
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-white mt-10 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-5 gap-4 mt-10">
          {skills.map((skill) => (
            <div
              key={skill.nome}
              className="rounded-lg backdrop-blur-xl bg-gray-900/30 flex flex-col items-center justify-center aspect-[1/1] p-4"
            >
              <div className="text-4md text-6xl text-white mb-2">
                <i className={`devicon-${skill.icon}-plain`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white text-center">
                {skill.nome}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
