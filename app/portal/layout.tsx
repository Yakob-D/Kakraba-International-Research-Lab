import DeveloperCredit from "../components/DeveloperCredit";

// Wraps every /portal page: adds the developer credit at the bottom
export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <footer className="px-4 py-6 text-center text-xs text-black/50 dark:text-white/50">
        <DeveloperCredit />
      </footer>
    </>
  );
}
