import ProfileCard from "../ui/ProfileCard";
import Footer from "../components/Footer";

const people = [
  {
    name: "Samuel Kakraba",
    credential: "Ph.D.",
    role: "Assistant Professor",
    imageSrc: "/SamuelKakraba/SamuelKakraba.webp",
    imageAlt: "Assistant Professor Samuel Kakraba",
    bio: "Placeholder bio for Assistant Professor Samuel Kakraba. Will be replaced with real information.",
    cv: "public/SamuelKakraba/DR-SAMUEL-KAKRABA-CV.pdf"
  },
  {
    name: "Samuel Dibabu Assefa",
    credential: "RT",
    role: "Graduate Research Assistant | Kakraba International Research Lab",
    imageSrc: "/SamuelDibabu/SamuelDibabu.JPG",
    initials: "SD",
    bio: "Samuel is a Master’s student in Biostatistics at Tulane University, specializing in Data Science and Statistical Machine Learning. His research focuses on statistical machine learning methods and explainable AI workflows to enhance clinical risk stratification and personalized medicine. As a Graduate Research Assistant at Kakraba International Research Lab, Samuel applies advanced statistical and predictive modeling techniques to improve disease diagnosis across clinical and public health contexts. He is particularly interested at the intersection of statistics, equitable AI, and diagnostic clinical imaging. He is dedicated to creating interpretable, data-driven tools that translate complex algorithms into practical, everyday clinical decisions.",
  },
  {
    name: "Nkemjika Grace Nnama",
    credential: "MSc",
    role: "Graduate Research Assistant | Kakraba’s International Research Lab",
    imageSrc: "/NkemjikaGrace/NkemjikaGrace.jpeg",
    initials: "NG",
    bio: "Nkem is a doctoral student in the Interdisciplinary Program in Aging Studies at Tulane University and a Graduate Research Assistant in Kakraba’s International Research Lab. Her research interests lie at the intersection of Neuroscience, Alzheimer’s disease, Mitochondrial biology, and drug discovery, with a particular interest in understanding biological mechanisms that contribute to age-related neurodegeneration. As regards her interest in drug discovery for AD, she seeks to identify and evaluate therapeutic compounds targeting mechanisms associated with neuro degeneration using computational approaches, bioinformatics and machine learning. Beyond therapeutic discovery, Nkem’s research interests extend to the translation of biomedical discoveries into equitable health outcomes. She is interested in questions surrounding access to emerging Alzheimer’s therapies, health disparities and the roles of health policy in determining who benefits from advances in biomedical research.",
    cv: "/NkemjikaGrace/Nkem-CV.pdf"
  },
  {
    name: "Faustina Asante",
    role: "Doctoral Research Assistant | Kakraba International Research Lab",
    imageSrc: "/FaustinaAsante/FaustinaAsante.jpeg",
    initials: "FA",
    bio: "Faustina Asante is a Ph.D. student in Mathematical Sciences with a concentration in Statistics at Northern Illinois University, where she earned an M.S. in Statistics and an M.S. in Artificial Intelligence in Business. Her research interests span biostatistics, Bayesian nonparametric methods, machine learning, and statistical computing, with an emphasis on developing and applying rigorous quantitative methods to complex health and population data. As a Doctoral Research Assistant with the Kakraba International Research Lab, Faustina contributes to data-driven research involving large-scale health and clinical datasets. Her research interests include predictive analytics, disease risk modeling, population health surveillance, and the application of advanced statistical and machine-learning methods to public health research. Her broader research agenda lies at the intersection of statistics, explainable and equitable artificial intelligence, and public health. She is particularly interested in developing interpretable and data-driven approaches to understanding health disparities and supporting evidence-based decision-making, with applications in chronic disease, maternal health, and population health.",
  },
  {
    name: "Aaron Enos",
    role: "Graduate Research Assistant | Kakraba International Research Lab",
    imageSrc: "/AaronEnos/AaronEnos.jpg",
    initials: "AE",
    bio: "Aaron Enos is a physician and Master of Public Health student at the Tulane University School of Public Health and Tropical Medicine, with interests spanning global health, epidemiology, infectious and tropical diseases, maternal and child health, and health systems strengthening. As a Graduate Research Assistant in the Kakraba International Research Lab, Aaron brings together his clinical experience and public health training to contribute to research that addresses important health challenges in diverse populations. He is interested in using epidemiologic and implementation science approaches to understand disease patterns, identify health disparities, evaluate public health interventions, and translate research findings into practical strategies that can improve health outcomes. His research interests particularly focus on infectious and tropical diseases, maternal and child health, and the implementation of evidence-based public health interventions in low- and middle-income countries. He is also interested in understanding how successful health programs and innovations developed in high-income settings can be appropriately adapted to local contexts, strengthened through health systems, and sustainably implemented in resource-constrained environments.",
    cv: "/AaronEnos/AaronEnos-CV.pdf"
  },
  {
    name: "Reginald Mawunyo Ahorlu",
    role: "Graduate Research Assistant | Kakraba International Research Lab",
    imageSrc: "/Reginald/ReginaldMawunyo.jpg",
    bio: "Reginald Ahorlu is a physician and MPH student in Epidemiology at the Tulane University School of Public Health and Tropical Medicine. His research interests include cardiovascular disease treatment and prevention, as well as the use of AI in chronic disease prevention. In the lab, he contributes to research projects by combining clinical insight from medical practice with epidemiologic methods, helping to frame relevant research questions, interpret patient and population-level data, and translate findings into practical prevention strategies. He is particularly interested in how successful chronic disease programs in high-income countries can be implemented in low- and middle-income countries.",
    cv: "/Reginald/Reginald-CV.pdf"
  },
  {
    name: "Helena Okyere",
    credential: "PhD Student in Chemistry",
    role: "Graduate Research Assistant, Kakraba International Research Lab",
    imageSrc: "/Helena/Helena.jpg",
    bio: "Helena Okyere is a PhD student in Chemistry at Tulane University with interests in chemical physics and theoretical and computational chemistry. Her research centers on vibrational energy transport, intramolecular energy redistribution, and relaxation in molecular systems. She uses both quantum mechanical and classical approaches to study how energy moves through molecules and interacts with their surroundings. Her work involves electronic structure calculations, molecular dynamics simulations, and data analysis using tools such as Gaussian, GROMACS, MATLAB, and Python. At Kakraba International Research Lab, she brings a physical and computational science perspective to interdisciplinary work in molecular modeling and biophysics.",
    cv: "/Helena/Helena-CV.pdf"
  },
  {
    name: "Kwame Asamoah-Senyah",
    credential: "MBBS",
    role: "Graduate Research Assistant | Kakraba International Research Lab",
    imageSrc: "/Kwame/Kwame.png",
    bio: "Kwame Asamoah-Senyah is a Master of Health Administration (MHA) student at Tulane University, with a background in medicine and an interest in healthcare management, health systems, and population health. He holds a Bachelor of Medicine and Bachelor of Surgery (MBBS) from Jiangsu University. His academic and professional interests span healthcare administration, healthcare analytics, health economics, quality improvement, artificial intelligence in healthcare, and the development of effective and equitable health systems. At the Kakraba International Research Lab, he contributes to research and analytical projects focused on healthcare and population health, applying clinical knowledge, health administration perspectives, data analytics, and artificial intelligence to examine complex healthcare challenges. His work includes exploring how data-driven and AI-enabled approaches can support healthcare research, improve decision-making, enhance health outcomes, and strengthen healthcare delivery. He is particularly interested in research at the intersection of healthcare management, analytics, artificial intelligence, and health systems, with a broader goal of leveraging emerging technologies and evidence-based approaches to contribute to sustainable improvements in healthcare delivery and access, particularly in underserved and resource-constrained settings.",
    cv: "/Kwame/Kwame-CV.pdf"
  },
  {
    name: "Jennifer Ataa Tetteh",
    role: "Research Assistant | Kakraba International Research Lab",
    imageSrc: "/Jennifer/Jennifer.jpg",
    bio: "Jennifer Ataa Tetteh holds a B.Sc. in Nutrition and Dietetics from the University of Cape Coast, Ghana, where she graduated with First Class Honours. Her research interests center on cognitive health, healthy aging, life-course nutrition, chronic disease, and population health, with broader interests in dietary behaviors, food environments, and food insecurity. Her research experience includes investigating the school food environment of children and adolescents in Ghana and assessing the nutritional status of older adults in the Cape Coast Metropolis. As a Research Assistant with the Kakraba International Research Lab, Jennifer is interested in the intersection of nutrition, aging, and data-driven health research. She is particularly interested in understanding how dietary and social determinants across the life course may influence healthy aging, cognitive and neurodegenerative health. She is also interested in developing her quantitative and data-analytic skills and exploring the application of artificial intelligence and other emerging computational approaches to population health research, while contributing a nutrition perspective to interdisciplinary research.",
    cv: "/Jennifer/Jennifer-CV.pdf"
  },
  {
    name: "Andrew Jacobs Bilson",
    credential: "PharmD",
    role: "Doctoral Research Assistant | Kakraba International Research Lab",
    imageSrc: "/Andrew/Andrew.jpg",
    bio: "Andrew is a doctoral student in the Interdisciplinary Program in Aging Studies at Tulane University. His research interests include Parkinson’s disease and movement disorders, genetics/genomics, and aging/neurodegeneration. In the lab, he contributes to collaborative research using clinical and genetic data, with interests spanning disease phenotyping, bioinformatics, and population health. He is particularly interested in research at the intersection of aging, neurodegeneration, and genetic factors, especially in underrepresented populations.",
    cv: "/Andrew/Andrew-CV.pdf"
  },
  {
    name: "Maame Aba Arhinmah Mensah",
    credential: "PharmD",
    role: "Masters Research Assistant | Kakraba International Research Lab",
    imageSrc: "/Maame/Maame.jpg",
    bio: "Maame Aba  is a Master of Public Health student specializing in Health Policy at Tulane University. She holds a Doctor of Pharmacy (PharmD) degree from Kwame Nkrumah University of Science and Technology (KNUST), Ghana. Her research interests include health economics, health policy, and health technology assessment, with a particular focus on economic evaluation, cost-effectiveness analysis, and health financing. She is particularly interested in applying economic evaluation methods to strengthen health financing and insurance systems and inform sustainable healthcare policies in countries worldwide",
    cv: "/Maame/Maame.pdf"
  },
  {
    name: "Doreen Alimsi Akum-Yong",
    credential: "MD",
    role: "Graduate Research Assistant | Kakraba International Research Lab",
    imageSrc: "/Doreen/Doreen.jpg",
    bio: "Doreen Alimsi Akum-Yong is a physician and Master of Public Health student in Epidemiology at the University of Memphis, with interests spanning dermatology, epidemiology, global health, and health policy. In the Kakraba International Research Lab, she brings together her clinical experience and public health training to apply epidemiologic methods, evidence synthesis, and population health approaches to understand disease patterns, identify health disparities, and generate evidence to inform clinical and public health practice. Her research interests particularly focus on dermatologic disease, global skin health, and health disparities, especially among underserved and underrepresented populations. She is also interested in the intersection of clinical medicine and public health, with a focus on understanding disease burden, risk factors, and barriers to healthcare."
  },
  {
    name: "Edmund Fosu Agyemang",
    credential: "GStat, MPhil, MS",
    role: "Doctoral Research Assistant | Kakraba International Research Lab",
    imageSrc: "/Edmund/Edmund.jpg",
    bio: "Edmund is a doctoral student in Biostatistics at Tulane University. His research interests include artificial intelligence, machine learning, applied statistics, and health data science. His work focuses on developing statistical and machine learning methods for healthcare applications, particularly class imbalance learning, predictive modeling, missing-data imputation, and explainable artificial intelligence. He is particularly interested in integrating advanced statistical methods with artificial intelligence to improve disease prediction, public health analytics, and evidence-based healthcare decision-making."
  },
  {
    name: "Clinton Nana Kwame Ameyaw",
    credential: "MBChB",
    role: "Graduate Research Assistant | Kakraba International Research Lab",
    imageSrc: "/AmeyawClinton/AmeyawClinton.jpg",
    initials: "AC",
    bio: "Clinton Nana Kwame Ameyaw is a physician and Master of Public Health candidate in Epidemiology at Tulane University School of Public Health and Tropical Medicine. He earned his MBChB from the University of Ghana Medical School. He then practiced as a medical doctor at Korle Bu Teaching Hospital and Holy Family Hospital, Techiman, caring for patients with communicable and non-communicable diseases in tertiary and resource-limited settings. His research interests span cardiovascular epidemiology, global surgery and surgical outcomes, infectious disease prevention, health equity, and the use of data-driven and AI methods to understand how policy shapes population health. At Tulane, Clinton is a Research Assistant on Check It NOLA, an NIH-funded study that aims to reduce chlamydia and gonorrhea among Black youth in New Orleans. He also serves as a Health Inequity, Policy Analysis, and AI Intern with the New Orleans Health Department, where he works on a project that uses AI to predict the health equity impact of policies before they are enacted. As a Graduate Research Assistant with the Kakraba International Research Lab, Clinton brings a clinical and epidemiological perspective to interdisciplinary research in global and population health. His long-term goal is to become a cardiothoracic surgeon and clinical researcher who bridges the gap between research and implementation in underserved communities, particularly in sub-Saharan Africa.",
    cv: "/AmeyawClinton/AmeyawClinton-CV.pdf"
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
