import ProfileCard from "../ui/ProfileCard";
import Footer from "../components/Footer";

const people = [
  {
    name: "Samuel Kakraba",
    credential: "Ph.D.",
    role: "Assistant Professor",
    imageSrc:
      "https://sph.tulane.edu/sites/default/files/styles/tulane_people/public/2024-04/Sam_Kakraba_042024_web.jpg?itok=FJMbJgsN",
    imageAlt: "Assistant Professor Samuel Kakraba",
    bio: "Placeholder bio for Assistant Professor Samuel Kakraba. Will be replaced with real information.",
  },
  {
    name: "Samuel Dibabu Assefa",
    credential: "RT",
    role: "Graduate Research Assistant | Kakraba International Research Lab",
    imageSrc: "/SamuelDibabu.JPG",
    initials: "SD",
    bio: "Samuel is a Master’s student in Biostatistics at Tulane University, specializing in Data Science and Statistical Machine Learning. His research focuses on statistical machine learning methods and explainable AI workflows to enhance clinical risk stratification and personalized medicine. As a Graduate Research Assistant at Kakraba International Research Lab, Samuel applies advanced statistical and predictive modeling techniques to improve disease diagnosis across clinical and public health contexts. He is particularly interested at the intersection of statistics, equitable AI, and diagnostic clinical imaging. He is dedicated to creating interpretable, data-driven tools that translate complex algorithms into practical, everyday clinical decisions.",
  },
  {
    name: "Nkemjika Grace Nnama",
    credential: "MSc",
    role: "Graduate Research Assistant | Kakraba’s International Research Lab",
    imageSrc: "/NkemjikaGrace.jpeg",
    initials: "NG",
    bio: "Nkem is a doctoral student in the Interdisciplinary Program in Aging Studies at Tulane University and a Graduate Research Assistant in Kakraba’s International Research Lab. Her research interests lie at the intersection of Neuroscience, Alzheimer’s disease, Mitochondrial biology, and drug discovery, with a particular interest in understanding biological mechanisms that contribute to age-related neurodegeneration. As regards her interest in drug discovery for AD, she seeks to identify and evaluate therapeutic compounds targeting mechanisms associated with neuro degeneration using computational approaches, bioinformatics and machine learning. Beyond therapeutic discovery, Nkem’s research interests extend to the translation of biomedical discoveries into equitable health outcomes. She is interested in questions surrounding access to emerging Alzheimer’s therapies, health disparities and the roles of health policy in determining who benefits from advances in biomedical research.",
  },
  {
    name: "Faustina Asante",
    credential: "",
    role: "Doctoral Research Assistant | Kakraba International Research Lab",
    imageSrc: "/FaustinaAsante.jpeg",
    initials: "FA",
    bio: "Faustina Asante is a Ph.D. student in Mathematical Sciences with a concentration in Statistics at Northern Illinois University, where she earned an M.S. in Statistics and an M.S. in Artificial Intelligence in Business. Her research interests span biostatistics, Bayesian nonparametric methods, machine learning, and statistical computing, with an emphasis on developing and applying rigorous quantitative methods to complex health and population data. As a Doctoral Research Assistant with the Kakraba International Research Lab, Faustina contributes to data-driven research involving large-scale health and clinical datasets. Her research interests include predictive analytics, disease risk modeling, population health surveillance, and the application of advanced statistical and machine-learning methods to public health research. Her broader research agenda lies at the intersection of statistics, explainable and equitable artificial intelligence, and public health. She is particularly interested in developing interpretable and data-driven approaches to understanding health disparities and supporting evidence-based decision-making, with applications in chronic disease, maternal health, and population health.",
  },
];

export default function PeoplePage() {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-10">
      <div className="mx-auto rounded-2xl border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 p-5 sm:p-8 md:p-10 shadow-md backdrop-blur-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">Meet the team</h1>

        <div className="mt-5">
          {people.map((person, index) => (
            <ProfileCard key={`${person.name}-${index}`} {...person} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
