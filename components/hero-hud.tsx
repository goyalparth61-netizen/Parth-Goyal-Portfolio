export default function HeroHud() {
  return (
    <div className="hero-hud" aria-hidden="true">
      <div className="hero-hud__frame">
        <div className="hero-hud__scan" />
        <div className="hero-hud__avatar-wrap">
          <img
            src="https://avatars.githubusercontent.com/u/229990387?v=4"
            alt=""
            className="hero-hud__avatar"
          />
          <span className="hero-hud__ring hero-hud__ring--a" />
          <span className="hero-hud__ring hero-hud__ring--b" />
          <span className="hero-hud__ring hero-hud__ring--c" />
        </div>

        <div className="hero-hud__label hero-hud__label--top">
          <span>SUBJECT / PG-001</span>
          <b>ONLINE</b>
        </div>
        <div className="hero-hud__label hero-hud__label--left">
          <span>SECURITY</span>
          <b>ACTIVE</b>
        </div>
        <div className="hero-hud__label hero-hud__label--right">
          <span>AI CORE</span>
          <b>READY</b>
        </div>
        <div className="hero-hud__coords">
          <span>30.3165 N</span>
          <span>78.0322 E</span>
        </div>
      </div>
      <div className="hero-hud__caption">
        <span>IDENTITY VERIFIED</span>
        <i />
        <span>PORTFOLIO NODE</span>
      </div>
    </div>
  );
}
