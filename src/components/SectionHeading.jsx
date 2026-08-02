function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-2xl"
    >
      <span className="border-b-2 border-sky-700 pb-1 dark:border-sky-400">
        {children}
      </span>
    </h2>
  );
}

export default SectionHeading;
