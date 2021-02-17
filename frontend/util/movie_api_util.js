export const fetchAllMovies = () => {
    return $.ajax({
      url: `/api/movies`,
      method: "get",
    });
  };
  
  export const fetchMovie = (movieId) => {
    return $.ajax({
      url: `api/movies/${movieId}`,
      method: "get",
    });
  };