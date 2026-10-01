const stats = [
  { label: "4 Partner Institutions" },
  { label: "20+ Mentees Placed" },
  { label: "3+ Countries" },
];

const researchTopics = [
  {
    number: "01",
    title: "AI-Driven Drug Discovery",
    description:
      "The team uses machine learning, QSAR modeling, and molecular simulation to find compounds that target protein aggregation in Alzheimer's disease and other neurodegenerative conditions, as well as candidates for leukemia and viral infections. This work has moved beyond publication into intellectual property, with three patent applications covering new therapeutic compounds for neurodegeneration, age-related disease, and cancer.",
  },
  {
    number: "02",
    title: "Graph-Theoretic and Computational Biology",
    description:
      "The lab continues a decade-long line of work that models how single point mutations reshape protein structure and function, from cystic fibrosis to SARS-CoV-2 and hepatitis B.",
  },
  {
    number: "03",
    title: "Clinical and Public Health Prediction",
    description:
      "The lab builds interpretable models for heart failure mortality, cancer recurrence and early detection, and population health surveillance. One example is SMART-pred, a multi-target AI platform supported by a Tulane CAIDS AI Seed Grant.",
  },
  {
    number: "04",
    title: "Responsible AI and Governance",
    description:
      "The lab asks hard questions about how AI should be evaluated, deployed, and overseen in public health, aging, and social care.",
  },
];

export default function About() {
  return (
    <div id="about" className="relative mx-auto mt-20 md:mt-32 mb-24 md:mb-10 px-4 sm:px-6 md:px-10 w-full max-w-7xl scroll-mt-28">
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-700 dark:text-orange-400">
          About Us
        </span>
        <h1 className="mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black via-orange-700 to-red-900 dark:from-orange-900 dark:via-orange-700 dark:to-orange-900 bg-clip-text text-transparent">
          Learn More About Us
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-black/50 dark:text-white/50">
          Who we are, what drives us, and the questions our research is built
          to answer.
        </p>
      </div>

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
        <div className="group relative">
          <div className="absolute -top-8 -left-8 -z-10 h-32 w-32 rounded-full bg-orange-400/20 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
          <div className="h-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-7 sm:p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black/10 dark:hover:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-red-900 to-orange-700" />
              <h2 className="text-xl sm:text-2xl font-semibold">About the Lab</h2>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-black/50 dark:text-white/50">
              The{" "}
              <span className="font-bold text-black dark:text-white">
                Kakraba Research Group
              </span>{" "}
              builds artificial intelligence that is rigorous, reproducible, and
              accountable to the people it serves. Led by Dr. Samuel Kakraba,
              Assistant Professor of Biostatistics and Data Science at Tulane
              University&apos;s Celia Scott Weatherhead School of Public Health
              and Tropical Medicine, the lab works where data science, drug
              discovery, and population health meet. Its question is simple and
              demanding: how do we turn machine learning into tools that improve
              health outcomes, and how do we make sure those tools deserve the
              trust placed in them?
            </p>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-500/10 via-slate-500/5 to-transparent border border-black/10 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-red-900 mb-2">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg italic text-black/70 dark:text-white/70">
                To develop trustworthy, open, and globally minded AI that speeds
                discovery, strengthens public health, and prepares the next
                generation of scientists, wherever they begin.
              </p>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute -top-10 -right-10 -z-10 h-32 w-32 rounded-full bg-red-400/30 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
          <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />
          <div className="h-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-7 sm:p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black/10 dark:hover:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-red-900 to-orange-700" />
              <h2 className="text-xl sm:text-2xl font-semibold">Global Reach and Mentorship</h2>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-black/50 dark:text-white/50">
              The lab&apos;s identity is also international. Dr. Kakraba serves
              as Tulane WSPH&apos;s liaison to four Ghanaian institutions: Kwame
              Nkrumah University of Science and Technology, the University of
              Ghana, the University of Cape Coast, and Ensign Global University.
              Through these partnerships and personal mentorship, he has helped
              more than 20 international students reach master&apos;s and
              doctoral programs in the United States, the United Kingdom,
              Canada, and beyond. Lab members include PhD, MS, and MSPH students
              who lead projects, present at national meetings, and co-author
              peer-reviewed work from their first year.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {stats.map((stat) => (
                <span
                  key={stat.label}
                  className="rounded-full border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 px-3.5 py-1.5 text-sm font-medium text-black/70 dark:text-white/70"
                >
                  {stat.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-6 md:mt-8">
        <div className="absolute -top-10 right-10 -z-10 h-40 w-40 rounded-full bg-red-400/10 blur-3xl" />
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-7 sm:p-8 md:p-10 shadow-sm backdrop-blur-xl text-left">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-orange-900 to-red-700" />
            <h2 className="text-xl sm:text-2xl font-semibold">Research Areas</h2>
          </div>
          <p className="text-base sm:text-lg text-black/50 dark:text-white/50 mb-6">
            The lab&apos;s work spans four connected areas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchTopics.map((topic) => (
              <div
                key={topic.number}
                className="rounded-2xl border border-black/10 dark:border-white/10 p-5 transition-colors duration-300 hover:border-black/10 dark:hover:border-white/10 hover:bg-slate-500/5"
              >
                <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-red-800 dark:from-orange-400 dark:to-red-500 bg-clip-text text-transparent">
                  {topic.number}
                </span>
                <h3 className="font-bold text-lg text-black dark:text-white mt-1 mb-2">
                  {topic.title}
                </h3>
                <p className="text-base leading-relaxed text-black/50 dark:text-white/50">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg text-black/50 dark:text-white/50 mt-6 pt-6 border-t border-black/10 dark:border-white/10">
            Reproducibility is central to the lab&apos;s practice. The team
            has released more than seven fully documented, publicly available
            machine learning workflows so others can check, reuse, and extend
            its methods.
          </p>
        </div>
      </div>
    </div>
  );
}
