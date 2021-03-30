  
  export const fetchGenre = (genreId) => {
    return $.ajax({
      url: `api/genres/${genreId}`,
      method: "get",
      data: {genreId}
    });
  };

  export const fetchAllGenres = () => {
    return $.ajax({
      url: `api/genres/`,
      method: "get",
    });
  };