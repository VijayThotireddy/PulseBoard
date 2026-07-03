import { GithubRepo, GithubUser } from "@/types/github";

import ProfileCard from "./ProfileCard";
import StatsCards from "./StatsCards";
import LanguageChart from "./LanguageChart";
import InsightsCard from "./InsightsCard";
import RepoExplorer from "./RepoExplorer";

interface DashboardProps {
  user: GithubUser;
  repos: GithubRepo[];
}

export default function Dashboard({
  user,
  repos,
}: DashboardProps) {
  return (
    <>
      <ProfileCard user={user} />

      <StatsCards repos={repos} />

      <LanguageChart repos={repos} />

      <InsightsCard repos={repos} />

      <RepoExplorer repos={repos} />
    </>
  );
}