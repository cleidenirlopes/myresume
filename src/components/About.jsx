import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section aria-labelledby="about-heading" className="flex flex-col gap-4">
      <SectionHeading id="about-heading">About</SectionHeading>
      <p className="max-w-2xl leading-relaxed text-slate-700 dark:text-slate-300">
        Customer Support and Customer Operations professional with international
        experience in iGaming (Entain) and large-scale digital operations (Accenture).
        Skilled in multi-channel support (chat, email, ticketing), account and payment
        queries, verification requests and case escalation, with a consistent focus on
        SLA adherence and clear documentation. Background also includes hands-on
        technical troubleshooting and a self-employed period supporting clients on
        digital products and websites. Native Portuguese speaker with fluent English,
        experienced working with UK, US and European users in fast-paced,
        process-driven environments.
      </p>
    </section>
  );
}

export default About;
