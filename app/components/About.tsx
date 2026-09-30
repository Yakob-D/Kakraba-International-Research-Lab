export default function About() {
  return (
    <div id="about" className="flex flex-col align-center justify-between text-center mx-auto mt-16 md:mt-30 px-4 sm:px-6 md:px-10 w-full scroll-mt-28">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Learn More About Us</h1>

      <div className="mt-10 md:mt-20 flex flex-col md:flex-row gap-8 md:gap-20 text-left">
        <div className="relative flex-1">
          <div className="h-full min-h-64 rounded-2xl border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 p-6 shadow-md backdrop-blur-xl">
            <h1 className="text-2xl font-semibold mb-5">About Us</h1>
            <p className="text-lg text-black/50 dark:text-white/50 pb-5">
              <span className="font-bold text-black dark:text-white">
                Kakraba International Research Lab
              </span>{" "}
              is a research group at Tulane University that uses artificial
              intelligence, biostatistics and data science to improve public
              health and biomedical outcomes.
            </p>

            <p className="text-lg text-black/50 dark:text-white/50">
              We believe AI should make people better at understanding and
              caring for their communities, without replacing their judgment.
              Our work sits where computation meets society: we build and study
              data-driven methods, and we ask how they can be governed, trusted
              and used fairly in real settings.
            </p>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="absolute -top-10 -right-10 -z-10 h-30 w-30 rounded-full bg-red-400/40 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />
          <div className="h-full min-h-64 rounded-2xl border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 p-6 shadow-md backdrop-blur-xl">
            <h1 className="text-2xl font-semibold mb-5">Our Mission</h1>
            <p className="text-lg text-black/50 dark:text-white/50 pb-5 mb-5 border-b border-black/10 dark:border-white/10">
              To advance rigorous, responsible AI and statistical methods that
              turn complex health data into knowledge people can act on, while
              protecting the autonomy, dignity and wellbeing of the people that
              data describes.
            </p>

            <h2 className="text-xl font-semibold mb-3">How We Work</h2>
            <ul className="space-y-2 text-lg text-black/50 dark:text-white/50">
              <li>
                <span className="font-bold text-black dark:text-white">
                  Interdisciplinary:
                </span>{" "}
                CS, biostatistics, public health, social work and policy.
              </li>
              <li>
                <span className="font-bold text-black dark:text-white">
                  International:
                </span>{" "}
                diverse contexts, not a single viewpoint.
              </li>
              <li>
                <span className="font-bold text-black dark:text-white">
                  People-centered:
                </span>{" "}
                research with communities, not just about them.
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="h-full min-h-64 rounded-2xl border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 p-6 shadow-md backdrop-blur-xl">
            <h1 className="text-2xl font-semibold mb-5">What We Focus On</h1>
            <h3 className="font-bold text-lg text-black dark:text-white">
              AI and Social Work
            </h3>
            <p className="text-lg text-black/50 dark:text-white/50 pb-3">
              How AI tools can support social workers and the communities they
              serve, while guarding against bias and harm in high-stakes
              decisions.
            </p>

            <h3 className="font-bold text-lg text-black dark:text-white">
              Governing Generative and Agentic AI
            </h3>
            <p className="text-lg text-black/50 dark:text-white/50 pb-3">
              Governance frameworks and policy approaches for AI systems that
              act with growing independence. in high-stakes decisions.
            </p>

            <h3 className="font-bold text-lg text-black dark:text-white">
              Cognitive Sovereignty
            </h3>
            <p className="text-lg text-black/50 dark:text-white/50">
              How individuals and communities can keep control over their own
              thinking and decision-making as AI becomes part of everyday life.
              in high-stakes decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
