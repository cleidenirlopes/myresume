import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Independent Digital Operations Projects",
    company: "Freelance / Self-Directed",
    period: "May 2025 – Present",
    location: "Remote, Lisbon",
    bullets: [
      "Managed WordPress-based digital projects, including content updates, SEO structure, publishing workflows and troubleshooting.",
      "Used AI tools to support research, documentation, content planning and operational task execution.",
      "Organised project tasks, content calendars and simple reporting using Excel and digital planning tools.",
      "Tested and improved website structure, internal links, page updates and publishing processes.",
    ],
    tools: "WordPress, Excel, Microsoft Teams, Notion, AI tools (ChatGPT, Claude), Google Workspace",
  },
  {
    title: "iGaming Customer Support Analyst",
    company: "Entain Group",
    period: "Nov 2024 – May 2025",
    location: "Lisbon",
    bullets: [
      "Delivered multi-channel customer support (chat, email, ticketing) for a global iGaming platform, handling account queries, payment issues, product questions and technical troubleshooting.",
      "Managed player account issues including login problems, verification (KYC) requests, bonus queries and responsible gaming concerns, following internal procedures and escalation paths.",
      "Investigated and resolved payment-related issues, liaising with internal teams to provide accurate, timely resolutions and maintain high CSAT scores.",
      "Maintained clear and accurate case records in Zendesk, ensuring SLA compliance and full audit trail for each player interaction.",
      "Adapted communication style to diverse international audiences, delivering consistent and empathetic support across English and Portuguese channels.",
      "Escalated recurring issues to product and technical teams with structured case notes, contributing to knowledge base updates and process improvements.",
    ],
    tools: "Zendesk, SharePoint, Microsoft Teams, Outlook, Excel",
  },
  {
    title: "Customer Operations & Trust & Safety Support",
    company: "Accenture",
    period: "Feb 2019 – Oct 2023",
    location: "Lisbon",
    bullets: [
      "Reviewed and moderated digital content against platform policies, applying consistent guidelines to flag, escalate or approve submissions across high-volume queues.",
      "Applied trust & safety policies to evaluate content risk, identify violations and produce well-documented decisions under time pressure and quality targets.",
      "Conducted quality review of processed cases, identifying errors, maintaining accuracy rates and supporting team KPIs and SLA adherence.",
      "Managed case documentation across Confluence and internal systems, ensuring complete, consistent and audit-ready records for all reviewed items.",
      "Supported risk monitoring activities by flagging anomalies, tracking recurring patterns and escalating high-risk cases to senior review queues.",
      "Handled customer operations tasks including account data requests, cross-team information flows and internal documentation queries across business units.",
      "Contributed to process improvements, onboarding materials and team knowledge base updates across a nearly five-year tenure.",
    ],
    tools: "Confluence, SharePoint, Excel, SQL (reporting), Overflow, Power BI",
  },
  {
    title: "Desktop Support Technician",
    company: "Wisdom Hardware",
    period: "Apr 2008 – Feb 2014",
    location: "São Paulo, Brazil",
    bullets: [
      "Provided front-line technical support for end users, resolving hardware, software, network and OS issues (Windows and Linux) in a help desk environment.",
      "Diagnosed and troubleshot connectivity problems, peripheral failures and application errors, delivering timely resolutions and minimising user downtime.",
      "Managed VPN access provisioning and remote connectivity support for distributed users.",
      "Maintained incident logs and authored user-facing documentation in English and Portuguese, including troubleshooting guides and FAQs.",
      "Coordinated with vendors and internal teams to improve system reliability and service delivery standards.",
    ],
    tools: "Windows OS, Linux OS, Microsoft Office, Outlook, Excel, SharePoint, VPN Tools",
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
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
              <span className="font-medium">Tools:</span> {role.tools}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
