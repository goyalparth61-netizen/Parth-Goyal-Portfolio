import { NextResponse } from "next/server";

const USERNAME = "goyalparth61-netizen";

export async function GET() {
  try {
    const headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "parth-goyal-portfolio",
    };

    const [profileResponse, reposResponse, eventsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, {
        headers,
        next: { revalidate: 900 },
      }),
      fetch(
        `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`,
        { headers, next: { revalidate: 900 } }
      ),
      fetch(
        `https://api.github.com/users/${USERNAME}/events/public?per_page=100`,
        { headers, next: { revalidate: 300 } }
      ),
    ]);

    if (!profileResponse.ok || !reposResponse.ok) {
      throw new Error("GitHub API unavailable.");
    }

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    const events = eventsResponse.ok ? await eventsResponse.json() : [];

    const commits = events.filter(
      (event: { type?: string }) =>
        event.type === "PushEvent"
    ).length;

    return NextResponse.json({
      publicEvents: Array.isArray(events) ? events.slice(0, 100).map(
        (event: { created_at?: string; type?: string }) => ({
          created_at: event.created_at,
          type: event.type,
        })
      ) : [],
      profile: {
        login: profile.login,
        public_repos: profile.public_repos,
        followers: profile.followers,
        following: profile.following,
        avatar_url: profile.avatar_url,
      },
      recentActivity: commits,
      repositories: repos
        .filter((repo: { fork?: boolean }) => !repo.fork)
        .slice(0, 6)
        .map(
          (repo: {
            name: string;
            html_url: string;
            language?: string | null;
            stargazers_count: number;
            forks_count: number;
            description?: string | null;
            updated_at: string;
          }) => ({
            name: repo.name,
            url: repo.html_url,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            description: repo.description,
            updated_at: repo.updated_at,
          })
        ),
    });
  } catch (error) {
    console.error("GitHub route failed:", error);
    return NextResponse.json(
      { error: "GitHub activity is temporarily unavailable." },
      { status: 503 }
    );
  }
}
