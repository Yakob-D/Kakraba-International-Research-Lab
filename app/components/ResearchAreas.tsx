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
  {
    title: "Placeholder Title 1",
    description:
      "Developing governance frameworks and policy approaches for generative and agentic AI systems as they take on greater autonomy.",
    id: "Research 3",
  },
  {
    title: "Placeholder Title 2",
    description:
      "Developing governance frameworks and policy approaches for generative and agentic AI systems as they take on greater autonomy.",
      
  },
  {
    title: "Placeholder Title 3",
    description:
      "Developing governance frameworks and policy approaches for generative and agentic AI systems as they take on greater autonomy.",
  },
];

export default function ResearchAreas() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-6 md:px-10">Research Areas</h1>
      <div className="px-4 sm:px-6 md:px-10">
        <ResearchAreaMarquee items={researchAreas} />
      </div>
    </div>
  );
}
