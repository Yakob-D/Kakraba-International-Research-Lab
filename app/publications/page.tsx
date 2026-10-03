import type { ReactNode } from "react";
import Footer from "../components/Footer";

// Source: Dr. Kakraba's CV (WSPH, 9-29-2026), "A. Peer-Reviewed Publications (Published or In Press)".
// Entries and numbering follow the CV exactly.

type Publication = {
  no: number;
  authors: string;
  title: ReactNode;
  journal: string;
  details?: string;
  doi?: string;
  status?: string;
  note?: string;
};

type YearGroup = {
  year: string;
  publications: Publication[];
};

const years: YearGroup[] = [
  {
    year: "2026",
    publications: [
      {
        no: 1,
        authors:
          "Daniela Candanedo, Edmund Agyemang, Farhana Chaudhry, Taylor Franks, Bailey Taylor, Kevin Siliezar, Samuel Kakraba",
        title:
          "Leveraging machine learning algorithms and explainable AI for predicting mental health disorder treatment at the workplace",
        journal: "Acta Psychologica",
        details: "Volume 267, 2026, 107081",
        doi: "https://doi.org/10.1016/j.actpsy.2026.107081",
      },
      {
        no: 2,
        authors: "Kakraba, S., Yadem, A.C., Abraham, K.E., et al.",
        title:
          "Unraveling protein secrets: machine learning unveils novel biologically significant associations among amino acids",
        journal:
          "Network Modeling Analysis in Health Informatics and Bioinformatics",
        details: "15, 114",
        doi: "https://doi.org/10.1007/s13721-026-00732-4",
      },
      {
        no: 3,
        authors:
          "Doumbia, S., Kane, F., Diabate, O., Cisse, C., Sanogo, I., Coulibaly, M.D., Fofana, F.G., Delamou, A., Beavogui, A.H., Thiam, S.M., Li, J., Keïta, M., Sogoba, N., Tangara, C.O., Kakraba, S., Wele, M., Diakite, M., Toure, M., Shaffer, J.G.",
        title:
          "Advancing data science research education in Africa through datathon-driven innovations",
        journal: "Scientific Reports",
        details: "2026 Mar 2. Epub ahead of print",
        doi: "https://doi.org/10.1038/s41598-026-41474-7",
      },
      {
        no: 4,
        authors: "Kakraba, S., Agyemang, E.F., Srivastav, S.K.",
        title:
          "Cognitive sovereignty and decolonial public health: reclaiming epistemic authority in the global AI era",
        journal: "Frontiers in Public Health",
        details: "14:1785170",
        doi: "https://doi.org/10.3389/fpubh.2026.1785170",
      },
      {
        no: 5,
        authors: "Kakraba, S., Agyemang, E.F., Shmookler Reis, R.J.",
        title:
          "Accelerating discovery of leukemia inhibitors using AI-driven quantitative structure–activity relationship: algorithm development and validation",
        journal: "JMIR AI",
        details: "5:e81552",
        doi: "https://doi.org/10.2196/81552",
      },
    ],
  },
  {
    year: "2025",
    publications: [
      {
        no: 6,
        authors:
          "Yang, Z., Zhou, H., Srivastav, S., Shaffer, J.G., Abraham, K.E., Naandam, S.M., Kakraba, S.",
        title:
          "Optimizing Parkinson’s disease prediction: a comparative analysis of data aggregation methods using multiple voice recordings via an automated artificial intelligence pipeline",
        journal: "Data",
        details: "10(1), 4",
        doi: "https://doi.org/10.3390/data10010004",
      },
      {
        no: 7,
        authors:
          "Wenzheng, H., Agyemang, E.F., Srivastav, S., Shaffer, J.G., Kakraba, S.",
        title:
          "AI-enhanced multi-algorithm R Shiny app for predictive modeling and analytics: a case study of Alzheimer’s disease diagnostics",
        journal: "JMIR Aging",
        details: "2025 Nov 5",
        doi: "https://doi.org/10.2196/70272",
      },
      {
        no: 8,
        authors:
          "Netsey, E.K., Naandam, S.M., Asante Jnr, J., Abraham, K.E., Yadem, A.C., Owusu, G., Shaffer, J.G., Srivastav, S.K., Doumbia, S., Owusu-Dabo, E., Morkle, C.E., Yemeh, D., Manortey, S., Yankson, E., Sangare, M., Kakraba, S.",
        title:
          "Structural and functional impacts of SARS-CoV-2 spike protein mutations: insights from predictive modeling and analytics",
        journal: "JMIR Bioinformatics and Biotechnology",
        details: "6:e73637",
        doi: "https://doi.org/10.2196/73637",
        note: "Article corrected in 2025 (Correction: 6:e89673)",
      },
      {
        no: 9,
        authors:
          "Kakraba, S., Ayyadevara, S., Yadem, C.A., Abraham, K.E., Compadre, C.M., Shmookler Reis, R.J.",
        title:
          "Machine learning-enhanced quantitative structure–activity relationship modeling for DNA polymerase inhibitor discovery: algorithm development and validation",
        journal: "JMIR AI",
        details: "4:e77890",
        doi: "https://doi.org/10.2196/77890",
      },
    ],
  },
  {
    year: "2023",
    publications: [
      {
        no: 10,
        authors:
          "Kakraba, S., Ayyadevara, S., Mainali, N., Balasubramaniam, M., Bowroju, S., Penthala, N.R., Atluri, R., Barger, S.W., Griffin, S.T., Crooks, P.A., et al.",
        title: (
          <>
            Thiadiazolidinone (TDZD) analogs inhibit aggregation-mediated
            pathology in diverse neurodegeneration models, and extend{" "}
            <em>C. elegans</em> life- and healthspan
          </>
        ),
        journal: "Pharmaceuticals",
        details: "16(10), 1498",
        doi: "https://doi.org/10.3390/ph16101498",
      },
    ],
  },
  {
    year: "2022",
    publications: [
      {
        no: 11,
        authors: "Naandam, S.M., Gogovi, G.K., Kakraba, S.",
        title:
          "Temperature effect on the structural dynamics of SARS-CoV-2 nucleocapsid domain",
        journal: "Advances in Computer Vision and Computational Biology",
        details: "Springer Nature Research Book Series",
        status: "Accepted, in press",
      },
    ],
  },
  {
    year: "2021",
    publications: [
      {
        no: 12,
        authors: "Netsey, E.K., Kakraba, S., Naandam, S.M., Yadem, A.C.",
        title:
          "A mathematical graph-theoretic model of single point mutations associated with sickle cell anemia disease",
        journal: "Journal of Advances in Biotechnology",
        details: "9, 1–14",
        doi: "https://doi.org/10.24297/jbt.v9i.9109",
      },
    ],
  },
  {
    year: "2020",
    publications: [
      {
        no: 13,
        authors:
          "Bowroju, S.K., Mainali, N., Ayyadevara, S., Penthala, N.R., Krishnamachari, S., Kakraba, S., Reis, R.J., Crooks, P.A.",
        title:
          "Design and synthesis of novel hybrid 8-hydroxy quinoline–indole derivatives as inhibitors of Aβ self-aggregation and metal chelation-induced Aβ aggregation",
        journal: "Molecules",
        details: "25(16), 3610",
        doi: "https://doi.org/10.3390/molecules25163610",
      },
    ],
  },
  {
    year: "2019",
    publications: [
      {
        no: 14,
        authors:
          "Kakraba, S., Ayyadevara, S., Penthala, N.R., Balasubramaniam, M., Ganne, A., Liu, L., Alla, R., Bommagani, S.B., Barger, S.W., Griffin, W.S.T., Crooks, P.A., Shmookler Reis, R.J.",
        title:
          "A novel microtubule-binding drug attenuates and reverses protein aggregation in animal models of Alzheimer’s disease",
        journal: "Frontiers in Molecular Neuroscience",
        details: "12, 310",
        doi: "https://doi.org/10.3389/fnmol.2019.00310",
      },
      {
        no: 15,
        authors:
          "Balasubramaniam, M., Ayyadevara, S., Kakraba, S., Alla, R., Mehta, J.L., Shmookler Reis, R.J.",
        title:
          "Aggregate interactome based on protein-crosslinking interfaces predicts drug targets to limit aggregation in neurodegenerative diseases",
        journal: "iScience",
        details: "19, 356–372",
        doi: "https://doi.org/10.1016/j.isci.2019.09.026",
      },
    ],
  },
  {
    year: "2017",
    publications: [
      {
        no: 16,
        authors:
          "Ayyadevara, S., Balasubramaniam, M., Kakraba, S., Alla, R., Mehta, J.L., Shmookler Reis, R.J.",
        title:
          "Aspirin-mediated acetylation protects against multiple neurodegenerative pathologies by impeding protein aggregation",
        journal: "Antioxidants & Redox Signaling",
        details: "27(17), 1383–1396",
        doi: "https://doi.org/10.1089/ars.2016.6978",
      },
    ],
  },
  {
    year: "2016",
    publications: [
      {
        no: 17,
        authors: "Kakraba, S., Knisley, D.",
        title:
          "A graph-theoretic model of single point mutations in the cystic fibrosis transmembrane conductance regulator",
        journal: "Journal of Advances in Biotechnology",
        details: "6(1), 780–786",
        doi: "https://doi.org/10.24297/jbt.v6i1.4013",
      },
    ],
  },
];

const journals = [
  "Scientific Reports",
  "JMIR AI",
  "JMIR Aging",
  "iScience",
  "Frontiers in Public Health",
  "Frontiers in Molecular Neuroscience",
  "Pharmaceuticals",
  "Antioxidants & Redox Signaling",
];

// Bold Dr. Kakraba's name in author lists ("Kakraba, S." or "Samuel Kakraba").
function Authors({ authors }: { authors: string }) {
  const parts = authors.split(/(Kakraba, S\.|Samuel Kakraba)/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-semibold text-black dark:text-white">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <li className="group relative flex flex-col sm:flex-row gap-3 sm:gap-6 rounded-xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400/40 dark:hover:border-zinc-400/40 hover:shadow-lg">
      <div className="shrink-0 sm:w-12">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-400/10 dark:bg-zinc-400/10 font-mono text-sm font-semibold text-red-700 dark:text-zinc-300">
          {pub.no}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-semibold leading-snug">
          {pub.doi ? (
            <a
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-red-600 dark:hover:text-zinc-300"
            >
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-black/60 dark:text-white/60">
          <Authors authors={pub.authors} />
        </p>
        <p className="mt-1 text-sm sm:text-base text-black/60 dark:text-white/60">
          <em className="text-black/80 dark:text-white/80">{pub.journal}</em>
          {pub.details && <>, {pub.details}</>}
        </p>
        {pub.note && (
          <p className="mt-1 text-xs sm:text-sm text-black/50 dark:text-white/50">
            {pub.note}
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {pub.doi && (
            <a
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs sm:text-sm font-mono text-black/70 dark:text-white/70 transition-colors group-hover:border-red-400/50 dark:group-hover:border-zinc-400/50 hover:bg-red-400/10 dark:hover:bg-zinc-400/10"
            >
              <span className="truncate">{pub.doi.replace("https://", "")}</span>
              <ArrowIcon />
            </a>
          )}
          {pub.status && (
            <span className="inline-flex items-center rounded-full bg-orange-400/15 dark:bg-zinc-400/15 px-3 py-1 text-xs sm:text-sm text-orange-700 dark:text-zinc-300">
              {pub.status}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

export default function PublicationsPage() {
  const total = years.reduce((n, y) => n + y.publications.length, 0);

  return (
    <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-10">
      <div className="relative mx-auto rounded-2xl border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 p-5 sm:p-8 md:p-10 shadow-md backdrop-blur-xl">
        <div className="absolute -top-10 -right-10 -z-10 h-40 w-40 rounded-full bg-red-400/30 dark:bg-zinc-400/30 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-orange-400/10 dark:bg-zinc-400/10 blur-3xl" />

        <h1 className="text-2xl sm:text-3xl md:text-4xl">Peer-Reviewed Publications</h1>
        <p className="mt-4 max-w-4xl text-base sm:text-lg leading-relaxed text-black/60 dark:text-white/60">
          The lab&apos;s peer-reviewed research appears in journals including{" "}
          {journals.map((j, i) => (
            <span key={j}>
              <em className="text-black/80 dark:text-white/80">{j}</em>
              {i < journals.length - 2 ? ", " : i === journals.length - 2 ? ", and " : ""}
            </span>
          ))}
          . Many of these papers are first-authored by lab trainees and mentored
          by Dr. Kakraba as senior and corresponding author.
        </p>

        <nav className="mt-6 flex flex-wrap items-center gap-2" aria-label="Jump to year">
          {years.map((y) => (
            <a
              key={y.year}
              href={`#year-${y.year}`}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-3 py-1.5 font-mono text-xs sm:text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              {y.year}
              <span className="rounded-full bg-black/10 dark:bg-white/10 px-1.5 text-xs">
                {y.publications.length}
              </span>
            </a>
          ))}
          <span className="px-2 text-xs sm:text-sm text-black/50 dark:text-white/50">
            {total} publications
          </span>
        </nav>

        {years.map((y) => (
          <section key={y.year} id={`year-${y.year}`} className="mt-12 scroll-mt-28">
            <h2 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold">
              <span className="h-6 w-1 rounded-full bg-gradient-to-b from-red-400 to-orange-400 dark:from-zinc-300 dark:to-zinc-500" />
              {y.year}
            </h2>
            <ul className="mt-5 space-y-4">
              {y.publications.map((pub) => (
                <PublicationCard key={pub.no} pub={pub} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
}
