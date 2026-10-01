import { useState } from "react";
import MovieCard from "./MovieCard";

function MovieSection({ title, movies = [] }) {
  const [showAll, setShowAll] = useState(false);

  const displayedMovies = showAll ? movies : movies.slice(0, 10);

  return (
    <section>
      <div className="section-header">
        <h2>{title}</h2>

        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "See All"}
        </button>
      </div>

      <div className={showAll ? "movie-grid" : "movie-container"}>
        {displayedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;