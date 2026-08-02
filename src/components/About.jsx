import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section aria-labelledby="about-heading" className="flex flex-col gap-4">
      <SectionHeading id="about-heading">About</SectionHeading>
      <p className="max-w-2xl leading-relaxed text-slate-700 dark:text-slate-300">
        Customer Support and Digital Operations professional with experience across
        iGaming support, content moderation, trust &amp; safety workflows, technical
        troubleshooting and back office operations. Skilled in ticket handling, case
        management, policy application and quality review within remote and
        cross-functional environments. Proficient with Zendesk, SharePoint, Confluence
        and Excel as core operational tools. Native Portuguese speaker with C2-level
        English and strong written communication across UK, US and European teams.
      </p>
    </section>
  );
}

export default About;
