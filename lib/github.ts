import { GithubUser } from "@/types/github";

const BASE_URL = "https://api.github.com";

export async function getGithubUser(
  username: string
): Promise<GithubUser> {
  const response = await fetch(`${BASE_URL}/users/${username}`, {
    headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
  },
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
  throw new Error("GitHub user not found.");
}

if (response.status === 403) {
  throw new Error(
    "GitHub API rate limit exceeded. Please try again later."
  );
}

if (!response.ok) {
  throw new Error("Failed to fetch GitHub data.");
}
  }

  

  return response.json();
}

export async function getGithubRepos(username: string) {
  const response = await fetch(
    `${BASE_URL}/users/${username}/repos?per_page=100&sort=updated`,
    {
        headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
  },
      next: {
        revalidate: 300,
      },
    }
  );

  if (!response.ok) {
    if (response.status === 404) {
  throw new Error("GitHub Repo not found.");
}

if (response.status === 403) {
  throw new Error(
    "GitHub API rate limit exceeded. Please try again later."
  );
}

if (!response.ok) {
  throw new Error("Failed to fetch GitHub Repo data.");
}
  }

  return response.json();
}