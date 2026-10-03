import ProfileCard from "../ui/ProfileCard";
import Footer from "../components/Footer";
import { slugify } from "../lib/slugify";

const people = [
  {
    name: "Samuel Kakraba",
    credential: "Ph.D.",
    role: "Assistant Professor",
    imageSrc: "/SamuelKakraba/SamuelKakraba.webp",
    imageAlt: "Assistant Professor Samuel Kakraba",
    initials: "SK",
    bio: "Dr. Samuel Kakraba is an Assistant Professor of Biostatistics and Data Science at Tulane University's Celia Scott Weatherhead School of Public Health and Tropical Medicine, where he leads the Kakraba International Research Lab. The lab builds artificial intelligence that is rigorous, reproducible, and accountable to the people it serves, working where data science, drug discovery, and population health meet. He also holds appointments at the Tulane Center for Aging and the Connolly Alexander Institute of Data Science, where he serves as Senior Advisor for Health Data Science Engagement.\n\nHis research spans four connected areas: AI-driven drug discovery, graph-theoretic and computational biology, clinical and public health prediction, and responsible AI and governance. Using machine learning, QSAR modeling, and molecular simulation, his team searches for compounds that target protein aggregation in Alzheimer's disease and other neurodegenerative conditions, as well as candidates for leukemia and viral infections. This work has produced three patent applications covering new therapeutic compounds for neurodegeneration, age-related disease, and cancer, including one on novel quinoline analogs for Alzheimer's disease therapy, for which he is the lead inventor. He continues a decade-long line of work modeling how single point mutations reshape protein structure and function, from cystic fibrosis to SARS-CoV-2 and hepatitis B. He also builds interpretable models for heart failure mortality, cancer recurrence and early detection, and population health surveillance, including SMART-pred, a multi-target AI platform supported by a Tulane CAIDS AI Seed Grant, and asks how AI should be evaluated, deployed, and overseen in public health, aging, and social care.\n\nHis peer-reviewed research appears in journals including Scientific Reports, JMIR AI, JMIR Aging, iScience, Frontiers in Public Health, Frontiers in Molecular Neuroscience, Pharmaceuticals, and Antioxidants & Redox Signaling, with many papers first-authored by trainees he mentors as senior and corresponding author. Committed to reproducibility, his team has released more than seven fully documented, publicly available machine learning workflows. He is Associate Editor of JMIR Aging and sits on the editorial board of Scientific Reports, along with more than a dozen other journals.\n\nDr. Kakraba serves as Tulane WSPH's liaison to four Ghanaian institutions: Kwame Nkrumah University of Science and Technology, the University of Ghana, the University of Cape Coast, and Ensign Global University. Through these partnerships and personal mentorship, he has helped more than 20 international students reach master's and doctoral programs in the United States, the United Kingdom, Canada, and beyond.",
    cv: "/SamuelKakraba/DR-KAKRABA-CV.pdf"
  },
  {
    name: "Edmund Fosu Agyemang",
    credential: "GStat, MPhil, MS",
    role: "Doctoral Research Assistant | Kakraba Research Group",
    imageSrc: "/Edmund/Edmund.jpg",
    initials: "EF",
    bio: "Edmund is a doctoral student in Biostatistics at Tulane University. His research interests include artificial intelligence, machine learning, applied statistics, and health data science. His work focuses on developing statistical and machine learning methods for healthcare applications, particularly class imbalance learning, predictive modeling, missing-data imputation, and explainable artificial intelligence. He is particularly interested in integrating advanced statistical methods with artificial intelligence to improve disease prediction, public health analytics, and evidence-based healthcare decision-making."
  },
  {
    name: "Faustina Asante",
    role: "Doctoral Research Assistant | Kakraba Research Group",
    imageSrc: "/FaustinaAsante/FaustinaAsante.jpeg",
    initials: "FA",
    bio: "Faustina Asante is a Ph.D. student in Mathematical Sciences with a concentration in Statistics at Northern Illinois University, where she earned an M.S. in Statistics and an M.S. in Artificial Intelligence in Business. Her research interests span biostatistics, Bayesian nonparametric methods, machine learning, and statistical computing, with an emphasis on developing and applying rigorous quantitative methods to complex health and population data. As a Doctoral Research Assistant with the Kakraba Research Group, Faustina contributes to data-driven research involving large-scale health and clinical datasets. Her research interests include predictive analytics, disease risk modeling, population health surveillance, and the application of advanced statistical and machine-learning methods to public health research. Her broader research agenda lies at the intersection of statistics, explainable and equitable artificial intelligence, and public health. She is particularly interested in developing interpretable and data-driven approaches to understanding health disparities and supporting evidence-based decision-making, with applications in chronic disease, maternal health, and population health.",
    cv: "/FaustinaAsante/Faustina-CV.pdf"
  },
  {
    name: "Desmond Yemeh",
    credential: "PharmD",
    role: "Doctoral Research Assistant | Kakraba Research Group",
    imageSrc: "/Desmond/Desmond.png",
    bio: "Desmond Yemeh is a PhD student in Aging Studies at Tulane University whose research lies at the intersection of aging, pharmaceutical sciences, bioinformatics, and data science. His work focuses on medication use and safety in older adults and the application of computational approaches to questions in pharmacotherapy, drug discovery, and aging. His research interests include medication adherence and medication related outcomes in older adults, neurodegenerative diseases, and the clinical, behavioral, and psychosocial factors that influence health across the aging process. He is also interested in community based approaches that promote health, independence, and quality of life among older adults. Desmond's computational research interests include bioinformatics, machine learning, quantitative structure activity relationship (QSAR) modeling, predictive modeling, and pharmacovigilance. He is particularly interested in integrating biological, chemical, clinical, and real world data to investigate drug activity and safety, identify patterns associated with health outcomes, and support drug discovery and therapeutic decision making. Before beginning his doctoral training, Desmond practiced as a clinical pharmacist in Ghana, where he led pharmaceutical services, pharmacovigilance, medication safety, antimicrobial stewardship, and quality improvement initiatives. His clinical pharmacy background continues to shape his research interests and his goal of using computational and data driven approaches to improve medication use, therapeutic outcomes, and health across the aging population.",
    initials: "DY",
    cv: "/Desmond/Desmond-CV.pdf",
  },
  {
    name: "Nkemjika Grace Nnama",
    credential: "MSc",
    role: "Doctoral Research Assistant | Kakraba Research Group",
    imageSrc: "/NkemjikaGrace/NkemjikaGrace.jpeg",
    initials: "NG",
    bio: "Nkem is a doctoral student in the Interdisciplinary Program in Aging Studies at Tulane University and a Graduate Research Assistant in Kakraba’s International Research Lab. Her research interests lie at the intersection of Neuroscience, Alzheimer’s disease, Mitochondrial biology, and drug discovery, with a particular interest in understanding biological mechanisms that contribute to age-related neurodegeneration. As regards her interest in drug discovery for AD, she seeks to identify and evaluate therapeutic compounds targeting mechanisms associated with neuro degeneration using computational approaches, bioinformatics and machine learning. Beyond therapeutic discovery, Nkem’s research interests extend to the translation of biomedical discoveries into equitable health outcomes. She is interested in questions surrounding access to emerging Alzheimer’s therapies, health disparities and the roles of health policy in determining who benefits from advances in biomedical research.",
    cv: "/NkemjikaGrace/Nkem-CV.pdf"
  },
  {
    name: "Blessing Chukwuma",
    credential: "MPH",
    role: "Doctoral Research Assistant | Kakraba Research Group",
    imageSrc: "/Blessing/Blessing.jpg",
    initials: "BC",
    bio: "Blessing Chukwuma, MPH, is an Assessment Coordinator for Data Analytics and Reporting at the University of Arkansas, Fayetteville, where she applies statistical analysis, data visualization, and population-level assessment methods to support evidence-informed decision-making. Her research interests lie at the intersection of women’s health, health services and outcomes research, health economics, and applied artificial intelligence, with a particular interest in understanding how data-driven approaches can improve healthcare delivery, preventive care, and population health outcomes. Within the Kakraba Research Group, Blessing contributes to interdisciplinary research applying biostatistical, computational, and AI-driven methods to public health and biomedical questions. Her broader research agenda focuses on using real-world and population health data to identify disparities, evaluate healthcare interventions and systems, and develop interpretable decision-support approaches that can inform more efficient and equitable allocation of healthcare resources.",
    cv: "/Blessing/Blessing-CV.pdf"
  },
  {
    name: "Matthew Quansah",
    credential: "MPH",
    role: "Doctoral Research Assistant | Kakraba Research Group",
    imageSrc: "/Matthew/Matthew.jpg",
    bio: "Matthew Quansah is a doctoral student at the Indiana University School of Public Health whose research focuses on environmental microbiology, particularly the use of flies as biomonitors of fecal contamination. His work investigates the acquisition and persistence of fecal-associated microorganisms in flies under different environmental conditions, with an emphasis on understanding how temperature and humidity influence microbial carriage. He is particularly interested in applying fly-based monitoring approaches to better characterize fecal contamination in terrestrial environments and complement conventional environmental monitoring methods.",
    cv: "/Matthew/Matthew-CV.docx",
  },
  {
    name: "Helena Okyere",
    credential: "PhD Student in Chemistry",
    role: "Doctoral Research Assistant | Kakraba Research Group",
    imageSrc: "/Helena/Helena.jpg",
    initials: "HO",
    bio: "Helena Okyere is a PhD student in Chemistry at Tulane University with interests in chemical physics and theoretical and computational chemistry. Her research centers on vibrational energy transport, intramolecular energy redistribution, and relaxation in molecular systems. She uses both quantum mechanical and classical approaches to study how energy moves through molecules and interacts with their surroundings. Her work involves electronic structure calculations, molecular dynamics simulations, and data analysis using tools such as Gaussian, GROMACS, MATLAB, and Python. At Kakraba Research Group, she brings a physical and computational science perspective to interdisciplinary work in molecular modeling and biophysics.",
    cv: "/Helena/Helena-CV.pdf"
  },
  {
    name: "Hubert Gagadosu",
    role: "Doctoral Research Assistant | Kakraba Research Group",
    imageSrc: "/Hubert/Hubert.jpeg",
    initials: "",
    bio: "My research lies at the intersection of biostatistics, epidemiology, and computational health science, with a focus on Bayesian and statistical modeling of complex health, social, genomic, and infectious disease data. I am particularly interested in infectious disease modeling using advanced compartmental frameworks, assessing disease transmission dynamics, evaluating intervention strategies, and understanding factors that influence population health outcomes and health disparities. My work integrates mathematical modeling, statistical inference, and data-driven methods to address public health challenges. More broadly, I am interested in applying quantitative and computational approaches to problems in epidemiology, mathematical biology, and population health, with the goal of supporting evidence-based public health decision-making.",
    cv: "/Hubert/Hubert-CV.pdf",
  },
  {
    name: "Samuel Dibabu Assefa",
    credential: "RT",
    role: "Graduate Research Assistant | Kakraba Research Group",
    imageSrc: "/SamuelDibabu/SamuelDibabu.JPG",
    initials: "SD",
    bio: "Samuel is a Masters student in Biostatistics at Tulane University, specializing in Data Science and Statistical Machine Learning. He holds a bachelor's degree in Medical Imaging. His research focuses on statistical machine learning methods and explainable AI workflows to enhance clinical risk prediction and personalized medicine. As a Graduate Research Assistant at Kakraba Research Group, Samuel engineer and benchmark comprehensive machine learning pipelines in Python and R implementing linear and semi-parametric modeling (Logistic Regression, GAM), discriminant analysis (LDA, QDA), probabilistic methods (Naive Bayes), instance and kernel algorithms (KNN, SVC), tree-based ensembles (Random Forest, Extra Trees), advanced boosting frameworks (AdaBoost, XGBoost, LightGBM, CatBoost), and unsupervised architectures (PCA, clustering) to optimize risk prediction across clinical and public health contexts. He is particularly interested at the intersection of statistics, equitable AI, and diagnostic clinical imaging. He is dedicated to creating interpretable, data-driven tools that translate complex algorithms into practical, everyday clinical decisions",
    cv: "/SamuelDibabu/SamuelDibabu-CV.pdf"
  },
  {
    name: "Yakob Dibabu Assefa",
    credential: "SE",
    role: "Software Research Assistant | Kakraba Research Group",
    imageSrc: "/Yakob/Yakob.png",
    initials: "YD",
    bio: "Yakob Dibabu is a final-year Software Engineering student at HiLCoE School of Computer Science & Technology. His expertise spans full-stack web development, building front-end and back-end systems with React, Next.js, and Node.js. He also has solid experience in native iOS development with Swift and SwiftUI. He has strong proficiency in data structures and algorithms, sharpened through a year-long intensive program in competitive problem solving. At the Kakraba International Research Lab, he develops and maintains the lab's software products. He also builds the interfaces that turn the team's AI and machine learning tools into applications people can use. His research interests lie at the intersection of software engineering and artificial intelligence, especially deploying AI on mobile devices for health and making machine learning reliable and accessible in real-world settings.",
    cv: "/Yakob/YAKOB-CV.pdf",
  },
  {
    name: "Aaron Enos",
    credential: "MD",
    role: "Graduate Research Assistant | Kakraba Research Group",
    imageSrc: "/AaronEnos/AaronEnos.jpg",
    initials: "AE",
    bio: "Aaron Enos is a physician and Master of Public Health student at the Tulane University School of Public Health and Tropical Medicine, with interests spanning global health, epidemiology, infectious and tropical diseases, maternal and child health, and health systems strengthening. As a Graduate Research Assistant in the Kakraba Research Group, Aaron brings together his clinical experience and public health training to contribute to research that addresses important health challenges in diverse populations. He is interested in using epidemiologic and implementation science approaches to understand disease patterns, identify health disparities, evaluate public health interventions, and translate research findings into practical strategies that can improve health outcomes. His research interests particularly focus on infectious and tropical diseases, maternal and child health, and the implementation of evidence-based public health interventions in low- and middle-income countries. He is also interested in understanding how successful health programs and innovations developed in high-income settings can be appropriately adapted to local contexts, strengthened through health systems, and sustainably implemented in resource-constrained environments.",
    cv: "/AaronEnos/AaronEnos-CV.pdf"
  },
  {
    name: "Reginald Mawunyo Ahorlu",
    credential: "MD",
    role: "Graduate Research Assistant | Kakraba Research Group",
    imageSrc: "/Reginald/ReginaldMawunyo.jpg",
    initials: "RM",
    bio: "Reginald Ahorlu is a physician and MPH student in Epidemiology at the Tulane University School of Public Health and Tropical Medicine. His research interests include cardiovascular disease treatment and prevention, as well as the use of AI in chronic disease prevention. In the lab, he contributes to research projects by combining clinical insight from medical practice with epidemiologic methods, helping to frame relevant research questions, interpret patient and population-level data, and translate findings into practical prevention strategies. He is particularly interested in how successful chronic disease programs in high-income countries can be implemented in low- and middle-income countries.",
    cv: "/Reginald/Reginald-CV.pdf"
  },
  {
    name: "Kwame Asamoah-Senyah",
    credential: "MBBS",
    role: "Graduate Research Assistant | Kakraba Research Group",
    imageSrc: "/Kwame/Kwame.png",
    initials: "KA",
    bio: "Kwame Asamoah-Senyah is a Master of Health Administration (MHA) student at Tulane University, with a background in medicine and an interest in healthcare management, health systems, and population health. He holds a Bachelor of Medicine and Bachelor of Surgery (MBBS) from Jiangsu University. His academic and professional interests span healthcare administration, healthcare analytics, health economics, quality improvement, artificial intelligence in healthcare, and the development of effective and equitable health systems. At the Kakraba Research Group, he contributes to research and analytical projects focused on healthcare and population health, applying clinical knowledge, health administration perspectives, data analytics, and artificial intelligence to examine complex healthcare challenges. His work includes exploring how data-driven and AI-enabled approaches can support healthcare research, improve decision-making, enhance health outcomes, and strengthen healthcare delivery. He is particularly interested in research at the intersection of healthcare management, analytics, artificial intelligence, and health systems, with a broader goal of leveraging emerging technologies and evidence-based approaches to contribute to sustainable improvements in healthcare delivery and access, particularly in underserved and resource-constrained settings.",
    cv: "/Kwame/Kwame-CV.pdf"
  },
  {
    name: "Andrew Jacobs Bilson",
    credential: "PharmD",
    role: "Doctoral Research Assistant | Kakraba Research Group",
    imageSrc: "/Andrew/Andrew.jpg",
    initials: "AJ",
    bio: "Andrew is a doctoral student in the Interdisciplinary Program in Aging Studies at Tulane University. His research interests include Parkinson’s disease and movement disorders, genetics/genomics, and aging/neurodegeneration. In the lab, he contributes to collaborative research using clinical and genetic data, with interests spanning disease phenotyping, bioinformatics, and population health. He is particularly interested in research at the intersection of aging, neurodegeneration, and genetic factors, especially in underrepresented populations.",
    cv: "/Andrew/Andrew-CV.pdf"
  },
  {
    name: "Maame Aba Arhinmah Mensah",
    credential: "PharmD",
    role: "Masters Research Assistant | Kakraba Research Group",
    imageSrc: "/Maame/Maame.jpg",
    bio: "Maame Aba  is a Master of Public Health student specializing in Health Policy at Tulane University. She holds a Doctor of Pharmacy (PharmD) degree from Kwame Nkrumah University of Science and Technology (KNUST), Ghana. Her research interests include health economics, health policy, and health technology assessment, with a particular focus on economic evaluation, cost-effectiveness analysis, and health financing. She is particularly interested in applying economic evaluation methods to strengthen health financing and insurance systems and inform sustainable healthcare policies in countries worldwide",
    cv: "/Maame/Maame.pdf"
  },
  {
    name: "Doreen Alimsi Akum-Yong",
    credential: "MD",
    role: "Graduate Research Assistant | Kakraba Research Group",
    imageSrc: "/Doreen/Doreen.jpg",
    bio: "Doreen Alimsi Akum-Yong is a physician and Master of Public Health student in Epidemiology at the University of Memphis, with interests spanning dermatology, epidemiology, global health, and health policy. In the Kakraba Research Group, she brings together her clinical experience and public health training to apply epidemiologic methods, evidence synthesis, and population health approaches to understand disease patterns, identify health disparities, and generate evidence to inform clinical and public health practice. Her research interests particularly focus on dermatologic disease, global skin health, and health disparities, especially among underserved and underrepresented populations. She is also interested in the intersection of clinical medicine and public health, with a focus on understanding disease burden, risk factors, and barriers to healthcare.",
    cv: "/Doreen/Doreen-CV.pdf"
  },
  {
    name: "Clinton Nana Kwame Ameyaw",
    credential: "MBChB",
    role: "Graduate Research Assistant | Kakraba Research Group",
    imageSrc: "/AmeyawClinton/AmeyawClinton.jpg",
    initials: "AC",
    bio: "Clinton Nana Kwame Ameyaw is a physician and Master of Public Health candidate in Epidemiology at Tulane University School of Public Health and Tropical Medicine. He earned his MBChB from the University of Ghana Medical School. He then practiced as a medical doctor at Korle Bu Teaching Hospital and Holy Family Hospital, Techiman, caring for patients with communicable and non-communicable diseases in tertiary and resource-limited settings. His research interests span cardiovascular epidemiology, global surgery and surgical outcomes, infectious disease prevention, health equity, and the use of data-driven and AI methods to understand how policy shapes population health. At Tulane, Clinton is a Research Assistant on Check It NOLA, an NIH-funded study that aims to reduce chlamydia and gonorrhea among Black youth in New Orleans. He also serves as a Health Inequity, Policy Analysis, and AI Intern with the New Orleans Health Department, where he works on a project that uses AI to predict the health equity impact of policies before they are enacted. As a Graduate Research Assistant with the Kakraba Research Group, Clinton brings a clinical and epidemiological perspective to interdisciplinary research in global and population health. His long-term goal is to become a cardiothoracic surgeon and clinical researcher who bridges the gap between research and implementation in underserved communities, particularly in sub-Saharan Africa.",
    cv: "/AmeyawClinton/AmeyawClinton-CV.pdf"
  },
  {
    name: "Nyameyie Essuman-Mensah",
    credential: "Esq",
    role: "Legal Research Assistant | Kakraba Research Group",
    imageSrc: "/Nyameyie/Nyameyie.jpg",
    initials: "NE",
    bio: "Nyameyie Essuman-Mensah is a Ghanaian and Gambian-qualified lawyer and Master of Laws (LL.M.) student at Pennsylvania State University. She holds an LL.B. from the University of Cape Coast, Ghana, and Barrister-at-Law (BL) qualifications from the Ghana School of Law and the Gambia School of Law. Her legal and academic interests span artificial intelligence governance and ethics, intellectual property, copyright protection for AI-generated works, human rights, and the protection of human dignity in the age of artificial intelligence. At the Kakraba International Research Lab, she contributes to legal research and analysis on emerging issues at the intersection of law, technology, and society, examining legal frameworks, regulatory developments, and ethical considerations surrounding artificial intelligence. Her broader research interests include the relationship between AI and intellectual property rights, the legal protection of AI-generated works, and the development of human centred regulatory frameworks for emerging technologies. She is particularly interested in developing legal approaches that promote technological innovation while safeguarding copyright, human rights, accountability, and human dignity.",
    cv: "/Nyameyie/Nyameyie-CV.pdf",
  },
  {
    name: "Paa-Kwesi Oduro",
    credential: "MBChB",
    role: "Graduate Research Assistant | Kakraba Research Group",
    imageSrc: "/Paa/Paa.jpg",
    bio: "Paa-Kwesi Oduro is a physician and an MPH candidate in Epidemiology at Tulane University School of Public Health and Tropical Medicine. He earned his MBChB from the University of Ghana Medical School and has practiced at Korle Bu Teaching Hospital and Tetteh Quarshie Memorial Hospital. His research interests include cardiovascular epidemiology, noncommunicable disease prevention, health equity, population health, and the use of data-driven and AI methods in public health. As a Graduate Research Assistant in the Kakraba International Research Lab, Paa-Kwesi contributes clinical and epidemiological expertise to interdisciplinary work in global and population health. His work centers on cardiovascular disease prevention, health disparities, and the role of AI in public health governance. He aspires to become a cardiologist and clinical researcher, integrating clinical medicine, epidemiology, and other branches of public health to advance health outcomes in underserved communities.",
    cv: "/Paa/Oduro-CV.pdf"
  },
  {
    name: "Jennifer Ataa Tetteh",
    credential: "BSc.",
    role: "Research Assistant | Kakraba Research Group",
    imageSrc: "/Jennifer/Jennifer.jpg",
    initials: "JA",
    bio: "Jennifer Ataa Tetteh holds a B.Sc. in Nutrition and Dietetics from the University of Cape Coast, Ghana, where she graduated with First Class Honours. Her research interests center on cognitive health, healthy aging, life-course nutrition, chronic disease, and population health, with broader interests in dietary behaviors, food environments, and food insecurity. Her research experience includes investigating the school food environment of children and adolescents in Ghana and assessing the nutritional status of older adults in the Cape Coast Metropolis. As a Research Assistant with the Kakraba Research Group, Jennifer is interested in the intersection of nutrition, aging, and data-driven health research. She is particularly interested in understanding how dietary and social determinants across the life course may influence healthy aging, cognitive and neurodegenerative health. She is also interested in developing her quantitative and data-analytic skills and exploring the application of artificial intelligence and other emerging computational approaches to population health research, while contributing a nutrition perspective to interdisciplinary research.",
    cv: "/Jennifer/Jennifer-CV.pdf"
  },
];

function categoryOf(person: (typeof people)[number]): string {
  const role = person.role ?? "";
  if (/Assistant Professor/i.test(role)) return "Head of the Lab";
  if (/Doctoral Research Assistant/i.test(role)) return "Doctoral Research Assistants";
  if (/Legal Research Assistant/i.test(role)) return "Legal Research Assistant";
  if (/Software Research Assistant/i.test(role)) return "Software Research Assistant";
  return "Graduate Research Assistants";
}

const categoryOrder = [
  "Head of the Lab",
  "Doctoral Research Assistants",
  "Graduate Research Assistants",
  "Software Research Assistant",
  "Legal Research Assistant",
];

const groups = categoryOrder
  .map((category) => ({
    category,
    slug: slugify(category),
    members: people.filter((person) => categoryOf(person) === category),
  }))
  .filter((group) => group.members.length > 0);

export default function PeoplePage() {
  const total = people.length;

  return (
    <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-10">
      <div className="relative mx-auto rounded-2xl border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 p-5 sm:p-8 md:p-10 shadow-md backdrop-blur-xl">
        <div className="absolute -top-10 -right-10 -z-10 h-40 w-40 rounded-full bg-red-400/30 dark:bg-zinc-400/30 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-orange-400/10 dark:bg-zinc-400/10 blur-3xl" />

        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Meet the Team</h1>
        <p className="mt-4 text-center text-base sm:text-lg leading-relaxed text-black/60 dark:text-white/60">
          The Kakraba Research Group brings together faculty, doctoral and
          graduate researchers, and collaborators across biostatistics,
          computational biology, medicine, and law, united by a shared
          commitment to rigorous, reproducible, data-driven science.
        </p>

        <nav className="mt-6 flex flex-wrap items-center gap-2" aria-label="Jump to group">
          {groups.map((group) => (
            <a
              key={group.slug}
              href={`#${group.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-3 py-1.5 text-xs sm:text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              {group.category}
              <span className="rounded-full bg-black/10 dark:bg-white/10 px-1.5 text-xs">
                {group.members.length}
              </span>
            </a>
          ))}
          <span className="px-2 text-xs sm:text-sm text-black/50 dark:text-white/50">
            {total} members
          </span>
        </nav>

        {groups.map((group) => (
          <section key={group.slug} id={group.slug} className="mt-12 scroll-mt-28">
            <h2 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold">
              <span className="h-6 w-1 rounded-full bg-gradient-to-b from-red-400 to-orange-400 dark:from-zinc-300 dark:to-zinc-500" />
              {group.category}
            </h2>
            <ul className="mt-5 space-y-4">
              {group.members.map((person) => (
                <ProfileCard key={person.name} {...person} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
