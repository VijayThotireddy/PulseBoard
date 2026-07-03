export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;

  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  bio: string | null;

  public_repos: number;
  followers: number;
  following: number;

  created_at: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;

  html_url: string;

  language: string | null;

  stargazers_count: number;

  forks_count: number;

  watchers_count: number;

  open_issues_count: number;

  updated_at: string;
}