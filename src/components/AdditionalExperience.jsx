import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Freelance Graphic Designer",
    company: "Upwork",
    period: "Mar 2018 – Oct 2022",
    location: "Remote",
    summary: "Asset modelling for the entertainment industry using Autodesk 3ds Max.",
  },
  {
    title: "Photographer",
    company: "Freelance",
    period: "2012 – Jun 2019",
    location: "Ireland",
    summary: "Wedding, newborn and real estate photography.",
  },
  {
    title: "Technical Support Engineer",
    company: "HP Souza Cruz",
    period: "Nov 2004 – Feb 2007",
    location: "Campinas, Brazil",
    summary: "Tested new product releases ahead of launch, suggested software and hardware improvements, and supported end users with troubleshooting.",
  },
  {
    title: "Logistics Analyst",
    company: "K & M Corporação Indústria Química Ltda",
    period: "Apr 2001 – Sep 2004",
    location: "Campinas, Brazil",
    summary: "Managed procurement, inventory and distribution, implementing demand forecasting and process improvements that reduced excess stock and lead times.",
  },
];

function AdditionalExperience() {
  return (
    <section aria-labelledby="additional-experience-heading" className="flex flex-col gap-5">
      <SectionHeading id="additional-experience-heading">Additional Experience</SectionHeading>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Earlier and concurrent freelance work, included for a complete history.
      </p>
      <ul className="flex flex-col gap-4">
        {roles.map((role) => (
          <li key={`${role.company}-${role.period}`} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <div>
              <span className="font-medium text-slate-900 dark:text-slate-100">{role.title}</span>
              <span className="text-slate-500 dark:text-slate-400"> &middot; {role.company} &middot; {role.location}</span>
              <p className="text-sm text-slate-600 dark:text-slate-400">{role.summary}</p>
            </div>
            <span className="whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{role.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AdditionalExperience;
