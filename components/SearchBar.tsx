"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  function handleSearch() {
    const trimmed = username.trim();

    if (!trimmed) return;

    router.push(`/user/${trimmed}`);
  }

  return (
    <div className="mt-16 flex justify-center">
      <div className="flex w-full max-w-2xl">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search GitHub username..."
          className="flex-1 rounded-l-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <button
          onClick={handleSearch}
          className="rounded-r-lg bg-blue-600 px-6 text-white transition-colors hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}