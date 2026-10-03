import ResearchAreaMarquee from "../ui/ResearchAreaMarquee";

const researchAreas = [
  {
    title: "AI and Social Work",
    description:
      "Exploring how AI tools can support social workers and the communities they serve, while guarding against bias and harm in high-stakes decisions.",
    id: "AI and Social Work",
  },
  {
    title: "Cognitive Sovereignty",
    description:
      "Studying how individuals and communities can retain autonomy over their own thinking and decision-making in AI-mediated environments.",
    id: "Cognitive Sovereignty",
  },
  // From Kakraba International Research Lab Bio, "Research Areas":
  {
    title: "AI-Driven Drug Discovery",
    description:
      "The team uses machine learning, QSAR modeling, and molecular simulation to find compounds that target protein aggregation in Alzheimer's disease and other neurodegenerative conditions, as well as candidates for leukemia and viral infections. This work has moved beyond publication into intellectual property, with three patent applications covering new therapeutic compounds for neurodegeneration, age-related disease, and cancer.",
  },
  {
    title: "Graph-Theoretic and Computational Biology",
    description:
      "The lab continues a decade-long line of work that models how single point mutations reshape protein structure and function, from cystic fibrosis to SARS-CoV-2 and hepatitis B.",
  },
  {
    title: "Clinical and Public Health Prediction",
    description:
      "The lab builds interpretable models for heart failure mortality, cancer recurrence and early detection, and population health surveillance. One example is SMART-pred, a multi-target AI platform supported by a Tulane CAIDS AI Seed Grant.",
  },
  {
    title: "Responsible AI and Governance",
    description:
      "The lab asks hard questions about how AI should be evaluated, deployed, and overseen in public health, aging, and social care.",
  },
];

export default function ResearchAreas() {
  return (
    <div className="mt-10 md:mt-20">
      <div className="flex flex-col items-start text-left px-4 sm:px-6 md:px-10">
        <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-700 dark:text-zinc-300">
          What We Study
        </span>
        <h1 className="mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black via-orange-700 to-red-900 dark:from-zinc-300 dark:via-white dark:to-zinc-500 bg-clip-text text-transparent">
          Research Areas
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-black/50 dark:text-white/50">
          Connected lines of work spanning artificial intelligence, computational biology, and public health.
        </p>
      </div>
      <div className="px-4 sm:px-6 md:px-10">
        <ResearchAreaMarquee items={researchAreas} />
      </div>
    </div>
  );
}
