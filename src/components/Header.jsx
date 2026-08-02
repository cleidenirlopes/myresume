import {
  BiSun,
  BiMoon,
  BiCurrentLocation,
  BiPhone,
  BiEnvelope,
  BiLogoGithub,
  BiLogoLinkedin,
  BiBriefcase,
  BiDownload,
} from "react-icons/bi";

const contactItems = [
  { label: "Lisbon, Portugal", icon: BiCurrentLocation },
  { label: "+351 914 569 328", icon: BiPhone, href: "tel:+351914569328" },
  { label: "cleidenirlopes@outlook.com", icon: BiEnvelope, href: "mailto:cleidenirlopes@outlook.com" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/cleidenirlopes",
    icon: BiLogoGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/decledenir-seo/",
    icon: BiLogoLinkedin,
  },
  {
    label: "Portfolio",
    href: "https://cledenir-portifolio.netlify.app/",
    icon: BiBriefcase,
  },
];

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="relative flex flex-col items-center gap-8 text-center">
      <button
        type="button"
        onClick={toggleDarkMode}
        aria-pressed={darkMode}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        className="no-print absolute right-0 top-0 rounded-full border border-slate-300 p-2 text-slate-600 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        {darkMode ? <BiSun className="text-xl" /> : <BiMoon className="text-xl" />}
      </button>

      {/* A. Identity */}
      <div className="flex flex-col items-center gap-4">
        <img
          src="/Profile.JPG"
          alt="Portrait of Cledenir Souza"
          width="144"
          height="144"
          className="h-32 w-32 rounded-full border-4 border-white object-cover object-top shadow-md dark:border-slate-800 sm:h-36 sm:w-36"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Cledenir Souza
          </h1>
          <p className="text-lg font-medium text-sky-700 dark:text-sky-400">
            Customer Support &amp; Digital Operations Specialist
          </p>
          <p className="mx-auto max-w-xl text-sm text-slate-600 dark:text-slate-400">
            Remote Customer Support &middot; Technical Support &middot; iGaming &middot; Trust &amp; Safety &middot; Back Office Operations
          </p>
        </div>
      </div>

      {/* B. Contact panel */}
      <div className="flex w-full justify-center overflow-x-auto">
        <div className="flex w-full flex-col divide-y divide-slate-200 rounded-xl border border-slate-200 dark:divide-slate-700 dark:border-slate-700 sm:inline-flex sm:w-auto sm:max-w-full sm:flex-row sm:divide-x sm:divide-y-0">
          {contactItems.map(({ label, icon: Icon, href }) => {
            const content = (
              <span className="flex items-center justify-center gap-2 whitespace-nowrap px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
                <Icon className="shrink-0 text-base text-slate-500 dark:text-slate-400" aria-hidden="true" />
                {label}
              </span>
            );
            return href ? (
              <a
                key={label}
                href={href}
                className="flex-none rounded hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-sky-600 dark:hover:bg-slate-800/60"
              >
                {content}
              </a>
            ) : (
              <span key={label} className="flex-none">
                {content}
              </span>
            );
          })}
        </div>
      </div>

      {/* C. Professional links + primary action */}
      <div className="flex flex-col items-center gap-4">
        <nav aria-label="Professional links" className="flex items-center gap-5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded text-sm font-medium text-slate-700 hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
            >
              <Icon className="text-lg" aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>

        <a
          href="/Cledenir-Souza-CV.pdf"
          download="Cledenir-Souza-CV.pdf"
          className="no-print flex items-center gap-2 rounded-full bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500"
        >
          <BiDownload aria-hidden="true" />
          Download CV (PDF)
        </a>
      </div>
    </header>
  );
}

export default Header;
