"use client";

import { useMemo, useState } from "react";
import { GithubRepo } from "@/types/github";
import RepoGrid from "./RepoGrid";

interface RepoExplorerProps {
  repos: GithubRepo[];
}

type SortOption = "stars" | "forks" | "updated" | "name";

const REPOS_PER_PAGE = 12;

export default function RepoExplorer({ repos }: RepoExplorerProps) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("stars");
  const [language, setLanguage] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Generate unique languages
  const languages = useMemo(() => {
    const unique = Array.from(
      new Set(
        repos
          .map((repo) => repo.language)
          .filter((lang): lang is string => lang !== null)
      )
    ).sort();

    return ["All", ...unique];
  }, [repos]);

  // Filter and Sort
  const filteredRepos = useMemo(() => {
    const filtered = repos.filter((repo) => {
      const matchesSearch = repo.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesLanguage =
        language === "All" || repo.language === language;

      return matchesSearch && matchesLanguage;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "stars":
          return b.stargazers_count - a.stargazers_count;

        case "forks":
          return b.forks_count - a.forks_count;

        case "updated":
          return (
            new Date(b.updated_at).getTime() -
            new Date(a.updated_at).getTime()
          );

        case "name":
          return a.name.localeCompare(b.name);

        default:
          return 0;
      }
    });
  }, [repos, search, language, sortBy]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredRepos.length / REPOS_PER_PAGE)
  );

  const paginatedRepos = filteredRepos.slice(
    (currentPage - 1) * REPOS_PER_PAGE,
    currentPage * REPOS_PER_PAGE
  );

  return (
    <section className="mt-10">
      {/* Filters */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row">
        <input
          type="text"
          aria-label="Search repositories..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value as SortOption);
            setCurrentPage(1);
          }}
          className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
        >
          <option value="stars">⭐ Stars</option>
          <option value="forks">🍴 Forks</option>
          <option value="updated">📅 Updated</option>
          <option value="name">🔤 Name</option>
        </select>

        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setCurrentPage(1);
          }}
          className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Empty State */}
      {filteredRepos.length === 0 ? (
        <div className="rounded-xl bg-slate-900 p-10 text-center">
          <h2 className="text-2xl font-semibold text-white">
            No repositories found
          </h2>
          <p className="mt-2 text-slate-400">
            Try changing the search text or language filter.
          </p>
        </div>
      ) : (
        <>
          <RepoGrid repos={paginatedRepos} />

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() =>
                  setCurrentPage((page) => Math.max(page - 1, 1))
                }
                disabled={currentPage === 1}
                className="rounded-lg bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              <span className="text-white">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.min(page + 1, totalPages)
                  )
                }
                disabled={currentPage === totalPages}
                className="rounded-lg bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}