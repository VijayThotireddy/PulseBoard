"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="max-w-md rounded-xl bg-slate-900 p-8 text-center">
        <h1 className="text-3xl font-bold text-red-400">
          Something went wrong
        </h1>

        <p className="mt-4 text-slate-300">
          {error.message}
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}