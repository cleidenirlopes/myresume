import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Customer Support",
    items: "Multi-channel support (chat, email, ticketing), account & payment queries, escalations, CSAT, first-contact resolution",
  },
  {
    title: "iGaming Operations",
    items: "Player account support, verification (KYC) requests, bonus queries, payment troubleshooting",
  },
  {
    title: "Safer Gambling, Player Protection & AML Awareness",
    items: "Gambling-related harm indicators, financial vulnerability, unusual activity/AML risk indicators, risk escalation, account restrictions",
  },
  {
    title: "Case & Ticket Management",
    items: "Zendesk, SLA adherence, case documentation, audit-trail maintenance",
  },
  {
    title: "Trust & Safety Background",
    items: "Content/policy review, risk monitoring, quality review, escalation workflows",
  },
  {
    title: "Technical Troubleshooting",
    items: "Windows/Linux, VPN, help desk, remote support, incident logging",
  },
  {
    title: "Communication",
    items: "Native Portuguese (BR/PT), fluent English, client-facing communication, cross-cultural support (UK/US/Europe)",
  },
  {
    title: "Tools",
    items: "Zendesk, SharePoint, Confluence, Microsoft Teams, Outlook, Excel",
  },
];

function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="flex flex-col gap-5">
      <SectionHeading id="skills-heading">Core Competencies</SectionHeading>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        {skillGroups.map(({ title, items }) => (
          <div key={title}>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {items}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
