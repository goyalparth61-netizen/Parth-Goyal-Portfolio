"use client";

import { useEffect, useMemo, useState } from "react";
import { Activity, Github } from "lucide-react";

type EventItem = {
  created_at: string;
  type: string;
};

type DayCell = {
  date: string;
  count: number;
};

function buildGrid(events: EventItem[]): DayCell[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const end = new Date(today);
  end.setDate(end.getDate() - 1);

  const start = new Date(end);
  start.setDate(start.getDate() - 83);

  const counts = new Map<string, number>();

  for (const event of events) {
    const date = new Date(event.created_at);
    date.setHours(0, 0, 0, 0);
    if (date >= start && date <= end) {
      const key = date.toISOString().slice(0, 10);
      counts.set(key, (counts.get(key) || 0) + 1);
    }
  }

  const cells: DayCell[] = [];
  for (let index = 0; index < 84; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = date.toISOString().slice(0, 10);
    cells.push({
      date: key,
      count: counts.get(key) || 0,
    });
  }

  return cells;
}

export default function ActivityHeatmap() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((response) => {
        if (!response.ok) throw new Error("GitHub API unavailable");
        return response.json();
      })
      .then((data) => setEvents(data.publicEvents || []))
      .catch(() => setFailed(true));
  }, []);

  const cells = useMemo(() => buildGrid(events), [events]);
  const max = Math.max(1, ...cells.map((cell) => cell.count));

  return (
    <div className="activity-heatmap">
      <div className="activity-heatmap__head">
        <div>
          <div className="section-label">
            <span className="section-label__line" />
            PUBLIC ACTIVITY SIGNAL
          </div>
          <h3>84 days of GitHub activity</h3>
        </div>
        <Github size={20} />
      </div>

      {failed ? (
        <div className="activity-heatmap__empty">
          <Activity size={17} />
          <span>Activity signal unavailable right now.</span>
        </div>
      ) : (
        <>
          <div className="activity-heatmap__grid" aria-label="GitHub public activity heatmap">
            {cells.map((cell) => {
              const intensity =
                cell.count === 0 ? 0 : Math.min(4, Math.ceil((cell.count / max) * 4));

              return (
                <span
                  key={cell.date}
                  className={`activity-cell activity-cell--${intensity}`}
                  title={`${cell.date}: ${cell.count} public event${cell.count === 1 ? "" : "s"}`}
                />
              );
            })}
          </div>

          <div className="activity-heatmap__legend">
            <span>LESS</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <i key={level} className={`activity-cell activity-cell--${level}`} />
            ))}
            <span>MORE</span>
            <small>Based on public GitHub events — not the private contribution graph.</small>
          </div>
        </>
      )}
    </div>
  );
}
