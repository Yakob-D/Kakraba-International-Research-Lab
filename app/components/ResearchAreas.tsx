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
      <h1 className="text-5xl ml-10">Research Areas</h1>
      <ResearchAreaMarquee items={researchAreas} />
    </div>
  );
}
