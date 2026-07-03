import { GithubRepo } from "@/types/github";

interface InsightsCardProps {
  repos: GithubRepo[];
}

export default function InsightsCard({
  repos,
}: InsightsCardProps) {
  const mostStarred =
    repos.reduce((best, repo) =>
      repo.stargazers_count > best.stargazers_count
        ? repo
        : best
    );

  const mostForked =
    repos.reduce((best, repo) =>
      repo.forks_count > best.forks_count
        ? repo
        : best
    );

  const recentlyUpdated =
    [...repos].sort(
      (a, b) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
    )[0];

  return (
    <div className="mt-8 rounded-xl bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        GitHub Insights
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <Insight
          title="⭐ Most Starred"
          value={mostStarred.name}
          subtitle={`${mostStarred.stargazers_count} stars`}
        />

        <Insight
          title="🍴 Most Forked"
          value={mostForked.name}
          subtitle={`${mostForked.forks_count} forks`}
        />

        <Insight
          title="🕒 Recently Updated"
          value={recentlyUpdated.name}
          subtitle={new Date(
            recentlyUpdated.updated_at
          ).toLocaleDateString()}
        />
      </div>
    </div>
  );
}

function Insight({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-lg bg-slate-800 p-5">
      <p className="text-slate-400">{title}</p>

      <h3 className="mt-3 text-xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}