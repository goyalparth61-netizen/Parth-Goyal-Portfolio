"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, GitBranch, Github, Radio, Star } from "lucide-react";

type GitHubData = {
  profile: {
    login: string;
    public_repos: number;
    followers: number;
    following: number;
    avatar_url: string;
  };
  recentActivity: number;
  repositories: Array<{
    name: string;
    url: string;
    language: string | null;
    stars: number;
    forks: number;
    description: string | null;
    updated_at: string;
  }>;
};

export default function GitHubLive() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/api/github")
      .then((response) => {
        if (!response.ok) throw new Error("GitHub unavailable");
        return response.json();
      })
      .then((payload) => {
        if (active) setData(payload);
      })
      .catch(() => {
        if (active) setFailed(true);
      });

    return () => {
      active = false;
    };
  }, []);

  if (failed) {
    return (
      <div className="github-live github-live--offline">
        <Github size={20} />
        <span>GitHub activity is temporarily unavailable.</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="github-live github-live--loading">
        <Radio size={18} />
        <span>Connecting to GitHub…</span>
      </div>
    );
  }

  return (
    <div className="github-live">
      <div className="github-live__header">
        <div>
          <div className="section-label">
            <span className="section-label__line" />
            LIVE GITHUB SIGNAL
          </div>
          <h3>@{data.profile.login}</h3>
        </div>
        <a
          href={`https://github.com/${data.profile.login}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub profile"
        >
          <Github size={20} />
        </a>
      </div>

      <div className="github-live__stats">
        <div><span>PUBLIC REPOS</span><strong>{data.profile.public_repos}</strong></div>
        <div><span>FOLLOWERS</span><strong>{data.profile.followers}</strong></div>
        <div><span>FOLLOWING</span><strong>{data.profile.following}</strong></div>
        <div><span>RECENT PUSHES</span><strong>{data.recentActivity}</strong></div>
      </div>

      <div className="github-live__repos">
        {data.repositories.map((repo) => (
          <a
            key={repo.name}
            className="github-repo"
            href={repo.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="github-repo__top">
              <span>{repo.name}</span>
              <ArrowUpRight size={16} />
            </div>
            <p>{repo.description || "Repository in Parth's engineering workspace."}</p>
            <div className="github-repo__meta">
              <span>{repo.language || "CODE"}</span>
              <span><Star size={12} /> {repo.stars}</span>
              <span><GitBranch size={12} /> {repo.forks}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
