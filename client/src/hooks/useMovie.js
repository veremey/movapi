import { useCallback, useState } from 'react';

const MAX_SELECTED_MOVIES = 20;

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const selectMovie = useCallback(
    (movie) => {
      const isNewMovie = !selectedMovies.find(({ id }) => id === movie.id);
      const moveiLength = selectedMovies.length;

      if (isNewMovie && moveiLength < MAX_SELECTED_MOVIES) {
        setSelectedMovies([movie, ...selectedMovies]);
      } else {
        alert("Sorry, you can't add more than 20 movies");
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
