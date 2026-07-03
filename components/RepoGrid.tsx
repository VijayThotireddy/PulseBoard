import { GithubRepo } from "@/types/github";
import RepoCard from "./RepoCard";

interface RepoGridProps {
  repos: GithubRepo[];
}

export default function RepoGrid({ repos }: RepoGridProps) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}