const About = () => {
  return (
    <section id="about" className="border-b border-slate-800 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Introduction
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-[#111c30] p-6 md:col-span-2">
            <h3 className="mb-4 text-xl font-semibold">
              Who I Am
            </h3>

            <p className="leading-8 text-slate-400">
              I'm Vishal Prajapati, a second-year Computer Science Engineering
              student at Jawaharlal Nehru University, New Delhi.

              I enjoy programming, exploring software technologies, and
              learning how applications are designed and developed.
              I'm working on strengthening my technical fundamentals
              through coursework and personal projects.

              {/* Replace this paragraph with your personal story. */}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-[#111c30] p-6">
            <h3 className="mb-5 text-xl font-semibold">
              Quick Information
            </h3>

            <div className="space-y-5">
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="mt-1 text-sm">New Delhi, India</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Education</p>
                <p className="mt-1 text-sm">B.Tech CSE</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Current Semester</p>
                <p className="mt-1 text-sm">3rd Semester</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Career Interest</p>
                <p className="mt-1 text-sm">Software Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;