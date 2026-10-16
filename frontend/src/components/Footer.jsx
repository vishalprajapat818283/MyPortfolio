const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#0b1120] px-5 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Vishal Prajapati
        </p>

        <p className="text-xs text-slate-500">
          Built with React and Tailwind CSS
        </p>

        <a
          href="#home"
          className="text-sm text-cyan-400 hover:text-cyan-300"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;