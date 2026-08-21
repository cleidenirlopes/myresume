import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Independent Digital & Support Projects",
    company: "Freelance / Self-Employed",
    period: "May 2025 – Present",
    location: "Remote, Lisbon",
    bullets: [
      "Managing independent digital projects, including website content updates, troubleshooting and publishing workflows.",
      "Organising project tasks and simple reporting using Excel and digital planning tools.",
    ],
    tools: "WordPress, Excel, Microsoft Teams",
  },
  {
    title: "iGaming Customer Support Analyst",
    company: "Entain",
    period: "Nov 2024 – May 2025",
    location: "Lisbon, Portugal (Hybrid)",
    bullets: [
      "Delivered multi-channel customer support (chat, email, ticketing) for international iGaming customers via Zendesk, handling account, product and technical troubleshooting queries.",
      "Investigated account and payment issues using Zendesk and Entain's internal account-management system, reviewing account status, activity history and existing restrictions to resolve login, verification (KYC), bonus and payment queries and apply or escalate appropriate account actions.",
      "Recognised signs of gambling-related harm and financial vulnerability during customer interactions, applying protective account restrictions and escalating cases in line with Safer Gambling and Player Protection procedures.",
      "Identified unusual or suspicious account activity and potential AML risk indicators during account reviews, applying permitted restrictions and escalating cases to specialist AML/Compliance teams per internal procedures.",
      "Created reusable step-by-step support templates and customer guidance for recurring queries and product/betting procedures, improving consistency and making complex instructions easier to follow.",
    ],
    tools: "Zendesk, SharePoint, Microsoft Teams, Outlook, Excel",
  },
  {
    title: "Customer Operations & Trust & Safety Support",
    company: "Accenture",
    period: "Feb 2019 – Oct 2023",
    location: "Lisbon, Portugal (Hybrid)",
    bullets: [
      "Reviewed and moderated digital content against platform policies, applying consistent guidelines to flag, escalate or approve submissions across high-volume queues.",
      "Applied trust & safety policies to evaluate content risk, identify violations and produce well-documented, audit-ready decisions under time pressure and quality targets.",
      "Conducted quality review of processed cases, maintaining accuracy rates and supporting team KPIs and SLA adherence.",
      "Supported risk monitoring by flagging anomalies and escalating high-risk cases, and handled customer operations tasks such as account data requests across business units.",
    ],
    tools: "Confluence, SharePoint, Excel",
  },
  {
    title: "Business Partner – Client Support & Digital Operations",
    company: "Aquarela Infinity",
    period: "2014 – 2019",
    location: "Self-employed",
    bullets: [
      "Co-founded and helped operate a small self-employed business providing digital products, websites, applications and game-related development.",
      "Acted as the primary client-facing contact: gathered requirements, discussed client needs, presented available services and translated requirements for the technical/development side.",
      "Supported clients using delivered applications and websites, handling questions and follow-up support after delivery.",
    ],
  },
  {
    title: "Desktop Support Technician",
    company: "Wisdom Hardware",
    period: "Apr 2008 – Feb 2014",
    location: "São Paulo, Brazil",
    bullets: [
      "Provided front-line technical support for end users, resolving hardware, software, network and OS issues (Windows and Linux) in a help desk environment.",
      "Diagnosed and troubleshot connectivity problems, peripheral failures and application errors, minimising user downtime, including VPN access and remote connectivity support.",
      "Maintained incident logs and authored user-facing troubleshooting documentation in English and Portuguese, coordinating with vendors to improve service delivery.",
    ],
    tools: "Windows OS, Linux OS, Microsoft Office, Outlook, Excel, VPN Tools",
  },
];

function Experience() {
  return (
    <section aria-labelledby="experience-heading" className="flex flex-col gap-8">
      <SectionHeading id="experience-heading">Professional Experience</SectionHeading>
      <ol className="relative flex flex-col gap-10 border-l border-slate-200 pl-6 dark:border-slate-700">
        {roles.map((role) => (
          <li key={`${role.company}-${role.period}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-sky-700 dark:border-slate-900 dark:bg-sky-400"
            />
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                {role.title}
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-400">{role.period}</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {role.company} &middot; {role.location}
            </p>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="pl-4 relative before:absolute before:left-0 before:content-['–']">
                  {bullet}
                </li>
              ))}
            </ul>
            {role.tools && (
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                <span className="font-medium">Tools:</span> {role.tools}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
