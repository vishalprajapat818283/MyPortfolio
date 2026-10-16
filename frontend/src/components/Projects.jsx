const projects = [
  {
    name: "Project Name One",
    category: "WEB DEVELOPMENT",
    description:
      "Describe your project here. Explain the problem it solves, its main features, and what you learned while developing it.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/YOUR_GITHUB_USERNAME/PROJECT_ONE",
    demo: "",
  },
  {
    name: "Project Name Two",
    category: "PROGRAMMING",
    description:
      "Write a short description of another project. Mention the important features and technical concepts you implemented.",
    technologies: ["C++", "Data Structures"],
    github: "https://github.com/YOUR_GITHUB_USERNAME/PROJECT_TWO",
    demo: "",
  },
  {
    name: "Project Name Three",
    category: "APPLICATION DEVELOPMENT",
    description:
      "Describe your third project and explain how it works or what makes it useful.",
    technologies: ["Python", "YOUR TECHNOLOGY"],
    github: "https://github.com/YOUR_GITHUB_USERNAME/PROJECT_THREE",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="border-b border-slate-800 bg-[#0e1728] px-5 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          My Work
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          A collection of projects that showcase my learning,
          programming skills, and development experience.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-slate-700 bg-[#111c30] p-6 transition hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl font-bold text-cyan-400">
                {"</>"}
              </div>

              <p className="mt-5 text-xs font-semibold tracking-wider text-cyan-400">
                {project.category}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {project.name}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-700 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
                >
                  GitHub ↗
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Replace the sample projects with your actual work and repository links.
        </p>
      </div>
    </section>
  );
};

export default Projects;