"use client";

import { FormEvent, useMemo, useState } from "react";
import { Activity, Crosshair, Fingerprint, LockKeyhole, Radar, ScanLine, ShieldCheck } from "lucide-react";

type LabMode = "recon" | "identity" | "integrity";

const modes: Array<{
  id: LabMode;
  label: string;
  icon: typeof Radar;
  intro: string;
  commands: string[];
  output: string[];
}> = [
  {
    id: "recon",
    label: "RECON",
    icon: Radar,
    intro: "Visual network reconnaissance simulator.",
    commands: ["scan --surface", "map --nodes", "inspect --protocols"],
    output: [
      "surface scan initialized...",
      "01  gateway     192.0.2.1",
      "02  service     HTTPS / 443",
      "03  service     SSH / 22",
      "topology graph generated",
      "simulation complete — no live targets touched",
    ],
  },
  {
    id: "identity",
    label: "IDENTITY",
    icon: Fingerprint,
    intro: "OSINT-style identity signal visualization.",
    commands: ["profile --signals", "score --risk", "trace --links"],
    output: [
      "collecting public profile signals...",
      "metadata consistency     87%",
      "behavioral consistency   79%",
      "network overlap           12%",
      "risk model                 LOW",
      "simulation complete",
    ],
  },
  {
    id: "integrity",
    label: "INTEGRITY",
    icon: LockKeyhole,
    intro: "Application integrity monitor simulation.",
    commands: ["hash --verify", "audit --runtime", "guard --state"],
    output: [
      "runtime fingerprint loaded",
      "dependency integrity       PASS",
      "configuration baseline     PASS",
      "unexpected mutation        NONE",
      "guard state                 ACTIVE",
      "integrity check complete",
    ],
  },
];

export default function CyberLab() {
  const [mode, setMode] = useState<LabMode>("recon");
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState<string[]>([]);

  const current = useMemo(
    () => modes.find((item) => item.id === mode) ?? modes[0],
    [mode]
  );

  function runSimulation(event: FormEvent) {
    event.preventDefault();
    if (running) return;

    setRunning(true);
    setOutput([]);

    current.output.forEach((line, index) => {
      window.setTimeout(() => {
        setOutput((items) => [...items, line]);
        if (index === current.output.length - 1) {
          window.setTimeout(() => setRunning(false), 160);
        }
      }, 260 * (index + 1));
    });
  }

  const Icon = current.icon;

  return (
    <div className="cyber-lab">
      <div className="cyber-lab__header">
        <div>
          <div className="section-label"><span className="section-label__line" />SAFE SIMULATION</div>
          <h3>Cyber Lab / Interactive Console</h3>
        </div>
        <span className="cyber-lab__status"><i /> SANDBOXED</span>
      </div>

      <div className="cyber-lab__tabs">
        {modes.map((item) => {
          const ModeIcon = item.icon;
          return (
            <button
              key={item.id}
              className={mode === item.id ? "active" : ""}
              onClick={() => {
                setMode(item.id);
                setOutput([]);
              }}
            >
              <ModeIcon size={15} /> {item.label}
            </button>
          );
        })}
      </div>

      <div className="cyber-lab__body">
        <div className="cyber-lab__visual">
          <div className="radar-grid">
            <span className="radar-ring radar-ring--1" />
            <span className="radar-ring radar-ring--2" />
            <span className="radar-ring radar-ring--3" />
            <span className="radar-sweep" />
            <span className="radar-core"><Icon size={22} /></span>
          </div>
          <div className="cyber-lab__metrics">
            <span><small>MODE</small>{current.label}</span>
            <span><small>STATE</small>{running ? "RUNNING" : "READY"}</span>
            <span><small>RISK</small>SIMULATION ONLY</span>
          </div>
        </div>

        <div className="cyber-lab__terminal">
          <p className="terminal__intro">{current.intro}</p>
          <div className="cyber-lab__commands">
            {current.commands.map((command) => <code key={command}>{command}</code>)}
          </div>

          <div className="cyber-lab__output" aria-live="polite">
            {output.length === 0 ? (
              <span className="terminal__placeholder">Run the safe simulation to populate the console…</span>
            ) : (
              output.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)
            )}
          </div>

          <form onSubmit={runSimulation}>
            <button type="submit" disabled={running}>
              <ScanLine size={15} />
              {running ? "SIMULATION RUNNING…" : "RUN SAFE SIMULATION"}
            </button>
          </form>
        </div>
      </div>

      <div className="cyber-lab__footer">
        <span><ShieldCheck size={14} /> No real hosts, accounts, or networks are contacted.</span>
        <span><Activity size={14} /> Visual portfolio demonstration</span>
        <span><Crosshair size={14} /> Built for interaction</span>
      </div>
    </div>
  );
}
