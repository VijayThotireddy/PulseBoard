import { GithubUser } from "@/types/github";
import Image from "next/image";

interface ProfileCardProps {
  user: GithubUser;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="rounded-xl bg-slate-900 p-8 shadow-lg">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <Image
            src={user.avatar_url}
            alt={user.login}
            width={128}
            height={128}
            sizes="128px"
            className="h-32 w-32 rounded-full"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white">
            {user.name ?? user.login}
          </h1>

          <p className="text-slate-400">@{user.login}</p>

          {user.bio && (
            <p className="mt-4 text-slate-300">{user.bio}</p>
          )}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
        <StatCard title="Followers" value={user.followers} />
        <StatCard title="Following" value={user.following} />
        <StatCard title="Repositories" value={user.public_repos} />
        <StatCard title="Location" value={user.location ?? "N/A"} />
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-lg bg-slate-800 p-4 text-center">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
    </div>
  );
}