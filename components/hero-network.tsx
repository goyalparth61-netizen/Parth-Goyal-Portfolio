export default function HeroNetwork() {
  return (
    <div className="hero-network" aria-hidden="true">
      <div className="hero-network__core">
        <div className="hero-network__globe">
          <span />
          <span />
          <span />
        </div>
        <b>AI</b>
      </div>
      <div className="hero-network__node hero-network__node--ai">AI</div>
      <div className="hero-network__node hero-network__node--security">SECURITY</div>
      <div className="hero-network__node hero-network__node--dev">DEVELOPMENT</div>
      <div className="hero-network__line hero-network__line--a" />
      <div className="hero-network__line hero-network__line--b" />
      <div className="hero-network__line hero-network__line--c" />
      <div className="hero-network__status">
        <span><i /> CURRENTLY</span>
        <strong>Exploring AI for real-world impact</strong>
        <b>↗</b>
      </div>
    </div>
  );
}
