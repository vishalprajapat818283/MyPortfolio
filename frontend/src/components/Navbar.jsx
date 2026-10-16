import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Goals", href: "#goals" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-[#0b1120]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-xl font-bold">
          Vishal<span className="text-cyan-400">.dev</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-300 hover:text-cyan-400"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-300 hover:text-cyan-400"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://leetcode.com/YOUR_LEETCODE_USERNAME/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-300 hover:text-cyan-400"
          >
            LeetCode ↗
          </a>

          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Email Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-700 px-3 py-2 text-sm lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close ✕" : "Menu ☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-700 bg-[#0b1120] p-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-2 flex flex-wrap gap-4 border-t border-slate-700 pt-4">
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-cyan-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-cyan-400"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://leetcode.com/YOUR_LEETCODE_USERNAME/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-cyan-400"
              >
                LeetCode ↗
              </a>

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="text-sm text-cyan-400"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;