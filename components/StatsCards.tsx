import { GithubRepo } from "@/types/github";
import {
  Star,
  GitFork,
  Package,
  Code2,
} from "lucide-react";


interface StatsCardsProps {
  repos: GithubRepo[];
}

export default function StatsCards({ repos }: StatsCardsProps) {
  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const totalForks = repos.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  const languages = new Set(
    repos
      .map((repo) => repo.language)
      .filter(Boolean)
  );

  const stats = [
  {
    title: "Total Stars",
    value: totalStars,
    icon: Star,
  },
  {
    title: "Total Forks",
    value: totalForks,
    icon: GitFork,
  },
  {
    title: "Languages",
    value: languages.size,
    icon: Code2,
  },
  {
    title: "Repositories",
    value: repos.length,
    icon: Package,
  },
];

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
  const Icon = stat.icon;

  return (
    <div
      key={stat.title}
      className="rounded-xl bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
    >
      <Icon className="h-8 w-8 text-blue-400" />

      <p className="mt-4 text-slate-400">
        {stat.title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        {stat.value}
      </h2>
    </div>
  );
})}
    </div>
  );
}