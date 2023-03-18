import { useCallback, useState } from 'react';

const MAX_SELECTED_MOVIES = 20;

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const selectMovie = useCallback(
    (movie) => {
      const isNewMovie = !selectedMovies.find(({ id }) => id === movie.id);

      if (isNewMovie && movie.length < MAX_SELECTED_MOVIES) {
        setSelectedMovies([movie, ...selectedMovies]);
      }
    },
    [selectedMovies],
  );

  const deletedMovie = useCallback(
    (movie) => {
      setSelectedMovies(selectedMovies.filter(({ id }) => id !== movie.id));
    },
    [selectedMovies],
  );

  return {
    selectedMovies,
    selectMovie,
    deletedMovie,
  };
};
