const skillGroups = [
  {
    title: "Programming Languages",
    description: "Languages I use to write programs.",
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    title: "Web Development",
    description: "Technologies for building web applications.",
    skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    description: "Tools I use in my development workflow.",
    skills: ["Git", "GitHub", "Linux"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-b border-slate-800 px-5 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Technical Expertise
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          My Skills
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Technologies and tools I have been learning and using
          throughout my development journey.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-700 bg-[#111c30] p-6 transition hover:border-cyan-500/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl font-bold text-cyan-400">
                {"</>"}
              </div>

              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-sm text-slate-500">
          This is a list of technologies I am learning or have worked with.
          My experience varies by technology.
        </p>
      </div>
    </section>
  );
};

export default Skills;