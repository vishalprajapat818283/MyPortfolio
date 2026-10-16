const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Jawaharlal Nehru University, New Delhi",
    duration: "20XX – 20XX",
    result: "Current Semester: 3rd",
    cgpa: "X.XX / 10",
  },
  {
    degree: "Class 12 / Senior Secondary",
    institution: "YOUR SCHOOL NAME",
    duration: "20XX – 20XX",
    result: "Percentage: XX%",
  },
  {
    degree: "Class 10 / Secondary",
    institution: "YOUR SCHOOL NAME",
    duration: "20XX – 20XX",
    result: "Percentage: XX%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="border-b border-slate-800 bg-[#0e1728] px-5 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          My Academic Background
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Education
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          My educational journey and academic background.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {education.map((item, index) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-slate-700 bg-[#111c30] p-6 transition hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 font-bold text-cyan-400">
                0{index + 1}
              </div>

              <h3 className="text-lg font-semibold leading-7">
                {item.degree}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.institution}
              </p>

              <p className="mt-4 text-sm text-cyan-300">
                {item.duration}
              </p>

              <div className="mt-4 space-y-3 border-t border-slate-700 pt-4">
                <p className="text-sm text-slate-300">
                  {item.result}
                </p>

                {item.cgpa && (
                  <div className="flex items-center justify-between rounded-lg bg-cyan-400/10 px-3 py-3">
                    <span className="text-sm text-slate-300">
                      Current CGPA
                    </span>

                    <span className="font-bold text-cyan-400">
                      {item.cgpa}
                    </span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;