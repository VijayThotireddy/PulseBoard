import { GithubRepo } from "@/types/github";
import {
  Star,
  GitFork,
  Code2,
  ExternalLink,
} from "lucide-react";

interface RepoCardProps {
  repo: GithubRepo;
}

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
      <h2 className="text-xl font-bold text-white">
        {repo.name}
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        {repo.description ?? "No description available"}
      </p>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-300">
        <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            {repo.stargazers_count}
        </div>

        <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            {repo.forks_count}
        </div>

        <div className="flex items-center gap-1">
            <Code2 className="h-4 w-4" />
            {repo.language ?? "Unknown"}
        </div>
        </div>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-blue-400 hover:underline"
        >
        View Repository
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}