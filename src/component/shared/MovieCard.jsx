function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
      />

      <h2>{movie.title || movie.name}</h2>

      <p>{movie.release_date || movie.first_air_date || movie.rating}</p>
    </div>
  );
}

export default MovieCard;