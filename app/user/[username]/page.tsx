
import {
  getGithubRepos,
  getGithubUser,
} from "@/lib/github";
import Dashboard from "@/components/Dashboard";

interface UserPageProps {
  params: Promise<{
    username: string;
  }>;
}

export default async function UserPage({
  params,
}: UserPageProps) {
  const { username } = await params;

  const [user, repos] = await Promise.all([
    getGithubUser(username),
    getGithubRepos(username),
  ]);

  return (
    <main className="min-h-screen bg-slate-950 p-10">
      <div className="mx-auto max-w-7xl">
        <Dashboard
        user={user}
        repos={repos}
      />
      </div>
    </main>
  );
}