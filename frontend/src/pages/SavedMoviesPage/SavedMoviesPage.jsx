import Movies from "../../components/Movies/Movies";
import SearchFormSavedMovies from "../../components/SearchForms/SearchFormSavedMovies";
import compareSearch from "../../utils/CompareSearch";
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext, useEffect, useState, useCallback } from "react";

function SavedMoviesPage() {
  const {
    savedMovies,
    setMessageSavedMovies,
    savedMoviesToShow,
    setSavedMoviesToShow,
  } = useContext(GeneralContext);
  const [isChecked, setIsChecked] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState(savedMovies);

  useEffect(() => {
    savedMoviesToShow.length === 0
      ? setMessageSavedMovies("Nothing found.")
      : setMessageSavedMovies("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMoviesToShow]);

  useEffect(() => {
    if (isChecked) {
      setSavedMoviesToShow(searchedMovies.filter((el) => el.duration <= 40));
    } else {
      setSavedMoviesToShow(searchedMovies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  useEffect(() => {
    setSavedMoviesToShow((prevMovies) =>
      prevMovies.length === 0
        ? savedMoviesToShow
        : savedMoviesToShow.filter(
            (el) => prevMovies.findIndex((m) => m.movieId === el.movieId) !== -1
          )
    );
    setSearchedMovies((prevSearchedMovies) =>
      prevSearchedMovies.length === 0
        ? savedMovies
        : savedMovies.filter(
            (el) =>
              prevSearchedMovies.findIndex((m) => m.movieId === el.movieId) !==
              -1
          )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies]);

  useEffect(() => {
    localStorage.setItem("saved-movies-to-show", JSON.stringify(savedMovies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSavedMoviesToShow(
      JSON.parse(localStorage.getItem("saved-movies-to-show")) || savedMovies
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSearchedMovies(data, query) {
    const dataFiltered = data.filter((el) => {
      if (isChecked) {
        return (
          el.duration <= 40 &&
          (compareSearch(el.nameRU, query) || compareSearch(el.nameEN, query))
        );
      }
      return compareSearch(el.nameRU, query) || compareSearch(el.nameEN, query);
    });
    setSearchedMovies(dataFiltered);
    setSavedMoviesToShow(dataFiltered);
  }

  function findMovies(query) {
    handleSearchedMovies(savedMovies, query);
  }

  const setFilterChecked = useCallback(
    (event) => {
      setIsChecked(event.target.checked);
    },
    [setIsChecked]
  );

  return (
    <main>
      <section className="saved-movies-page">
        <SearchFormSavedMovies
          search={findMovies}
          checked={isChecked}
          setChecked={setFilterChecked}
        />
        <Movies movies={savedMoviesToShow} />
      </section>
    </main>
  );
}

export default SavedMoviesPage;
