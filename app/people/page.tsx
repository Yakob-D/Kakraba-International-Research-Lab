import ProfileCard from "../ui/ProfileCard"
import Footer from "../components/Footer";
import { getContributors } from "../lib/contributors"

export const dynamic = "force-dynamic"

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
        name: "Participant 2",
        credential: "Masters Student",
        role: "Research Assistant",
        initials: "P2",
        bio: "Placeholder bio. Will be replaced with real information",
    },
    {
        name: "Participant 3",
        credential: "Masters Student",
        role: "Research Assistant",
        initials: "P3",
        bio: "Placeholder bio. Will be replaced with real information.",
    },
]

export default async function PeoplePage() {
    const contributors = await getContributors()
    const allPeople = [...people, ...contributors]

    return (
        <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-10">
            <div className="mx-auto rounded-2xl border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/5 p-5 sm:p-8 md:p-10 shadow-md backdrop-blur-xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl">
                    Meet the team
                </h1>

                <div className="mt-5">
                    {allPeople.map((person, index) => (
                        <ProfileCard key={`${person.name}-${index}`} {...person} />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
