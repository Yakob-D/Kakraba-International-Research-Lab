import Link from "next/link"
import ContributorModal from "./ContributorModal"

export default function Hero() {
  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col align-center justify-between text-center mx-auto mt-10 mb-24 sm:mb-32 md:mb-40 px-4 sm:px-6">
      <div className="absolute top-20 right-20 -z-10 h-30 w-30 rounded-full bg-indigo-500/30 dark:bg-indigo-400/40 blur-3xl" />
      <div className="absolute top-20 left-50 -z-10 h-30 w-30 rounded-full bg-indigo-500/30 dark:bg-indigo-400/40 blur-3xl" />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Kakraba International Research Lab</h1>
      <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl mt-5 sm:mt-6 md:mt-7">
        Advancing Artificial Intelligence, Biostatistics, and data-driven
        discovery
      </h3>
      <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl mt-5 sm:mt-6 md:mt-7">
        to improve Public Health and Biomedical outcomes.
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-10 sm:mt-15 mx-auto w-full max-w-xs sm:max-w-none sm:w-auto">
        <Link
          href="/researches"
          className="w-full sm:w-56 whitespace-nowrap px-6 py-3 bg-black text-white dark:text-black dark:bg-white rounded-full hover:bg-black/80 dark:hover:bg-white/80 transition-color duration-300"
        >
          Our Researches
        </Link>
        <ContributorModal />
      </div>
    </div>
  );
}
