import SectionHeading from "./SectionHeading";

const certifications = [
  { name: "Data Analytics Bootcamp", meta: "IronHack, Lisbon" },
  { name: "Data Visualization & Storytelling", meta: "LinkedIn Learning, 2024" },
  { name: "SQL for Data Science", meta: "LinkedIn Learning, 2024" },
  { name: "Financial Modelling Foundations", meta: "LinkedIn Learning, 2023" },
  { name: "GCP for DevOps", meta: "Skillsoft, 2023" },
];

const languages = [
  { name: "Portuguese", level: "Native (BR/PT)" },
  { name: "English", level: "Fluent, C2" },
];

const cardClass =
  "rounded-xl border border-slate-200 bg-slate-50/60 p-6 dark:border-slate-700 dark:bg-slate-800/40";

function Credentials() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr]">
      <section aria-labelledby="certifications-heading" className={`${cardClass} flex flex-col gap-4`}>
        <SectionHeading id="certifications-heading">Certifications</SectionHeading>
        <ul className="divide-y divide-slate-200 dark:divide-slate-700">
          {certifications.map((cert) => (
            <li key={cert.name} className="flex flex-col gap-0.5 py-2.5 first:pt-0 last:pb-0">
              <span className="font-medium text-slate-900 dark:text-slate-100">{cert.name}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{cert.meta}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-col gap-6">
        <section aria-labelledby="education-heading" className={`${cardClass} flex flex-col gap-3`}>
          <SectionHeading id="education-heading">Education</SectionHeading>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Computer Science</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              University of Campinas (UNICAMP) &mdash; Campinas, Brazil
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">1998–2003</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Completed five-year programme
            </p>
          </div>
        </section>

        <section aria-labelledby="languages-heading" className={`${cardClass} flex flex-col gap-3`}>
          <SectionHeading id="languages-heading">Languages</SectionHeading>
          <ul className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-300">
            {languages.map(({ name, level }) => (
              <li key={name}>
                <span className="font-medium">{name}</span> &ndash; {level}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Credentials;
