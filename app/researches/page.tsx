import ResearchCard from "../ui/ResearchCard";
import Footer from "../components/Footer";

const people = [
  {
    title: "AI and Social Work",
    imageSrc:
      "https://imgs.search.brave.com/ZMKYy3CfYTTcUqct0kzUBdWqjY5lry_aRFxiEv0qKvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c29jaWFsd29ya2Vy/cy5vcmcvcG9ydGFs/cy8wL0ltYWdlcy9f/QWJvdXQvRXRoaWNz/L0V0aGljcy1BSS1C/YW5uZXIuanBnP3Zl/cj1qT0Eycm5RdE5t/TjNmWml4a1NBZHlB/PT0",
    imageAlt: "AI and Social Work",
    description:
      "Social workers make some of the most consequential decisions in public life: whether a child is safe at home, which families receive limited support, and how to respond when someone is in crisis. More and more agencies are turning to AI tools, such as risk-assessment models, case-management systems and automated screening, to help with these decisions. These tools promise to save time and reveal patterns people might miss. They also risk encoding historical biases, hiding how decisions are made, and weakening the professional judgment and human relationships at the heart of social work. Our research asks how AI can support social workers without replacing them. We study how predictive and generative AI systems are designed, tested and used in real social service settings, and we examine who benefits, who is overlooked and who may be harmed. Using statistical methods, fairness audits and close collaboration with practitioners, we evaluate whether these tools are accurate, transparent and fair across different communities. We pay particular attention to groups who have historically been over-surveilled or underserved.Beyond evaluation, we work to build better tools and practices. This includes designing decision-support systems that explain their reasoning, developing guidelines for responsible use in agencies, and training social work students and professionals to question and use AI with confidence. Throughout, we involve the people most affected, including frontline workers, clients and community members, so that the technology reflects the values of the profession: dignity, justice and care for the whole person.",
    id: "AI and Social Work",
  },
  {
    title: "Cognitive Sovereignty",
    imageSrc:
      "https://imgs.search.brave.com/aaqoUof_DxLYRcTz1mrQ67DuqN6yLZ-jtPZQEsW7L0k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb2Jl/cmFuaWFjb2duaXRp/dmEuY29tLmJyL19h/c3Ryby9tZW50ZS5C/WlVOLV8zel81dUxZ/UC53ZWJw",
    imageAlt: "Cognitive Sovereignty",
    description:
      "AI now shapes much of how people find information, form opinions and make decisions: what news we see, which options a recommendation system shows us, and how a chatbot frames a question about health, money or politics. These systems can be genuinely helpful. They also shape our thinking in ways we rarely notice, nudging choices, narrowing perspectives and encouraging us to hand over judgment we used to exercise ourselves. Cognitive sovereignty is the ability of individuals and communities to keep meaningful control over their own thinking in this environment. Our research studies how AI-mediated environments affect human autonomy, attention and decision-making, especially in health and public life. We examine how persuasive design, personalization and over-reliance on AI tools influence what people believe and choose, and how these effects differ across age groups, cultures and levels of digital access. Using surveys, behavioral experiments and statistical modeling, we measure when AI strengthens human reasoning and when it quietly replaces it. We also ask what protecting cognitive sovereignty looks like in practice. This includes designing AI systems that support independent thinking rather than dependence, developing tools that help people recognize when they are being steered, and informing policies that protect mental autonomy as a public value. We pay particular attention to communities in the Global South and other groups whose languages, knowledge systems and ways of reasoning are often underrepresented in the data that powers today's AI. Our goal is a future where AI expands human understanding without deciding for us what to think.",
    id: "Cognitive Sovereignty",
  },
  {
    title: "Research 3",
    description:
      "Placeholder description. Will be replaced with real information.",
    id: "Research 3",
  },
];

export default function PeoplePage() {
  return (
    <div className="px-16 py-10">
      <div className="mx-auto rounded-2xl border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 p-10 shadow-md backdrop-blur-xl">
        <h1 className="text-4xl">On going Researches</h1>

        <div className="mt-5">
          {people.map((person) => (
            <ResearchCard key={person.title} {...person} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
