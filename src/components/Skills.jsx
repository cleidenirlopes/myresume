import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Customer Support",
    items: "Ticket handling, chat & email support, account queries, payment issues, escalations, CSAT, first-contact resolution",
  },
  {
    title: "iGaming Support",
    items: "Player accounts, verification (KYC), bonus queries, responsible gaming, payment troubleshooting, multi-channel support",
  },
  {
    title: "Trust & Safety",
    items: "Content review, policy application, risk monitoring, quality review, escalation workflows, compliance documentation",
  },
  {
    title: "Technical Support",
    items: "Windows / Linux, VPN, help desk, remote troubleshooting, incident logging, user support, technical documentation",
  },
  {
    title: "Back Office & Operations",
    items: "Case management, SLA adherence, process documentation, data organisation, operational reporting, workflow execution",
  },
  {
    title: "Tools",
    items: "Zendesk, Excel, SharePoint, Microsoft Teams, Outlook, Confluence, WordPress, AI tools, SQL (supporting), Power BI (supporting)",
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
