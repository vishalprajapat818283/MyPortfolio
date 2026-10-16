const goals = [
  {
    title: "Full-Stack Development",
    description:
      "Learn to build complete web applications, from user interfaces to backend APIs and databases.",
  },
  {
    title: "Problem Solving",
    description:
      "Improve logical thinking and programming fundamentals through coding problems and algorithms.",
  },
  {
    title: "Open Source",
    description:
      "Explore open-source projects, collaborate with developers, and learn from real-world codebases.",
  },
];

const Goals = () => {
  return (
    <section
      id="goals"
      className="border-b border-slate-800 px-5 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          What's Next?
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Interests & Career Goals
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          My aim is to strengthen my technical knowledge, build useful
          software, and gain practical experience through internships
          and collaborative projects.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {goals.map((goal, index) => (
            <article
              key={goal.title}
              className="rounded-2xl border border-slate-700 bg-[#111c30] p-6 transition hover:border-cyan-500/50"
            >
              <p className="text-sm font-bold text-cyan-400">
                0{index + 1}
              </p>

              <h3 className="mt-5 text-xl font-semibold">
                {goal.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {goal.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 sm:p-8">
          <h3 className="text-xl font-bold">
            Currently Learning
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            {/* Replace this line with the topics you are currently studying. */}
            Currently focusing on programming fundamentals, web development,
            and building projects to gain practical experience.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["YOUR CURRENT TOPIC 1", "YOUR CURRENT TOPIC 2", "YOUR CURRENT TOPIC 3"].map(
              (topic) => (
                <span
                  key={topic}
                  className="rounded-lg border border-slate-700 bg-[#111c30] px-3 py-2 text-sm text-slate-300"
                >
                  {topic}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;