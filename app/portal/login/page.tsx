import LoginForm from "./LoginForm";

export default async function LoginPage({
  searchParams,
}: PageProps<"/portal/login">) {
  const { error } = await searchParams;

  return (
    <div className="relative min-h-screen flex items-center px-4 text-black dark:text-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      </div>

      <main
        className="relative mx-auto w-full max-w-sm text-center
      rounded-2xl border border-black/10 dark:border-white/10
      bg-black/3 dark:bg-white/5
      px-6 py-12 shadow-md backdrop-blur-xl"
      >
        <div className="absolute -top-10 -right-10 -z-10 h-40 w-40 rounded-full bg-red-400/30 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl" />

        <h1 className="mb-1 text-2xl font-semibold">Member portal</h1>
        <p className="mb-6 text-sm text-black/60 dark:text-white/60">
          Log in to update your lab profile.
        </p>
        <LoginForm linkError={error === "invalid-link"} />
      </main>
    </div>
  );
}
