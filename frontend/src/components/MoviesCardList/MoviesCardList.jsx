import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, moviesNumber }) {
  return (
    <section className="movies-cardlist">
      {movies?.slice(0, moviesNumber).map((movie) => {
        return <MoviesCard key={movie.id || movie._id} movie={movie} />;
      })}
    </section>
  );
}

export default MoviesCardList;
