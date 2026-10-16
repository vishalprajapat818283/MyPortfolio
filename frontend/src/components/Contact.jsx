const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-linear-to-b from-[#0b1120] to-[#101b30] px-5 py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Get In Touch
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Let's Connect
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
          I'm interested in internship opportunities, software development,
          open-source contributions, and connecting with fellow developers.
          Feel free to reach out if you'd like to discuss an idea or
          collaborate on a project.
        </p>

        <a
          href="mailto:YOUR_EMAIL@example.com"
          className="mt-8 inline-block rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Send Me an Email ↗
        </a>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 bg-[#111c30] px-6 py-4 transition hover:border-cyan-400"
          >
            <p className="font-semibold">GitHub</p>
            <p className="mt-1 text-xs text-slate-400">
              My repositories
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 bg-[#111c30] px-6 py-4 transition hover:border-cyan-400"
          >
            <p className="font-semibold">LinkedIn</p>
            <p className="mt-1 text-xs text-slate-400">
              Connect with me
            </p>
          </a>
          <a
            href="https://leetcode.com/YOUR_LEETCODE_USERNAME/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 bg-[#111c30] px-6 py-4 transition hover:border-cyan-400"
          >
            <p className="font-semibold">LeetCode</p>

            <p className="mt-1 text-xs text-slate-400">
              My coding profile
            </p>
          </a>
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="rounded-xl border border-slate-700 bg-[#111c30] px-6 py-4 transition hover:border-cyan-400"
          >
            <p className="font-semibold">Email</p>
            <p className="mt-1 text-xs text-slate-400">
              Get in touch
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;