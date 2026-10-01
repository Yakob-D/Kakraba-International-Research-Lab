import Footer from "../components/Footer";
import ConferenceList from "./ConferenceList";
import { conferences } from "./data";

export default function ConferencesPage() {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-10">
      <div className="relative mx-auto rounded-2xl border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 p-5 sm:p-8 md:p-10 shadow-md backdrop-blur-xl">
        <div className="absolute -top-10 -right-10 -z-10 h-40 w-40 rounded-full bg-red-400/30 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />

        <h1 className="text-2xl sm:text-3xl md:text-4xl">Conference Presentations</h1>

        <ConferenceList data={conferences} />
      </div>

      <Footer />
    </div>
  );
}
