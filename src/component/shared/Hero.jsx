function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small-text">FEATURED MOVIE</p>

        <h1>Interstellar</h1>

        <p className="hero-info">
          ⭐8.5 • 2014 • Sci-Fi • Adventure • Drama
        </p>

        <p className="hero-description">
          A team of explorers travel through a wormhole in space
          in an attempt to ensure humanity's survival.
        </p>

        <div className="hero-buttons">
          <button className="hero-button">
            Watch Now
          </button>

          <button className="hero-watchlist">
            + Watchlist
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;