export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-950 p-10">
      <div className="mx-auto max-w-7xl animate-pulse">

        <div className="h-56 rounded-xl bg-slate-800" />

        <div className="mt-8 h-80 rounded-xl bg-slate-800" />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-52 rounded-xl bg-slate-800"
            />
          ))}
        </div>

      </div>
    </main>
  );
}