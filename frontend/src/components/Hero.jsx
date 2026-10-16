import profileImage from "../assets/1740822859632-fotor-bg-remover-2025042973159.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="border-b border-slate-800 bg-linear-to-br from-[#0b1120] via-[#101b30] to-[#0b1120]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-5 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            B.Tech CSE Student · 3rd Semester
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm
            <span className="mt-2 block text-cyan-400">
              Vishal Prajapati
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-slate-300 sm:text-2xl">
            Aspiring Full-Stack Software Developer
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            I'm a Computer Science Engineering student at Jawaharlal Nehru
            University, New Delhi. I'm passionate about software development,
            learning new technologies, and building useful applications.
            I'm looking for internship opportunities where I can learn,
            collaborate, and grow as a developer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Explore Projects →
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact Me
            </a>
            <a
              href="/Resume_Vishal_prajapati.pdf"
              download
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-cyan-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-cyan-400"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://leetcode.com/YOUR_LEETCODE_USERNAME/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-cyan-400"
            >
              LeetCode ↗
            </a>
            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="text-slate-300 hover:text-cyan-400"
            >
              Email ↗
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-5 rounded-full bg-cyan-500/10 blur-2xl" />

            <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-cyan-400/60 bg-slate-800 sm:h-80 sm:w-80">
              <img
                src={profileImage}
                alt="Vishal Prajapati"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-slate-700 bg-[#111c30] px-5 py-3 text-center shadow-xl">
              <p className="text-sm font-semibold text-cyan-300">
                Computer Science Engineering
              </p>

              <p className="mt-1 text-xs text-slate-400">
                JNU · New Delhi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;