import Image from "next/image"
import Link from "next/link"
import ContributorModal from "./ContributorModal"

export default function Hero() {
  return (
    <div className="relative h-full w-full overflow-hidden mx-auto mt-10 mb-24 sm:mb-32 md:mb-40 md:mt-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black via-orange-700 to-red-900 dark:from-white/5 dark:via-orange-800 dark:to-red-900 bg-clip-text text-transparent">Kakraba Research Group</h1>
          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl mt-5 sm:mt-6 md:mt-7">
            Advancing Artificial Intelligence, Biostatistics, and data-driven
            discovery
          </h3>
          <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl mt-5 sm:mt-6 md:mt-7">
            to improve Public Health and Biomedical outcomes.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-10 sm:mt-15 mx-auto lg:mx-0 w-full max-w-xs sm:max-w-none sm:w-auto">
            <Link
              href="/researches"
              className="w-full sm:w-56 whitespace-nowrap text-center px-6 py-3 bg-black text-white dark:text-black dark:bg-white rounded-full hover:bg-black/80 dark:hover:bg-white/80 transition-color duration-300"
            >
              Our Research
            </Link>
            <ContributorModal />
          </div>
        </div>

        <div className="relative w-full max-w-md lg:flex-1 lg:max-w-none">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden ">
            <Image
              src="/landing-page-image.png"
              alt="Kakraba Research Group"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
