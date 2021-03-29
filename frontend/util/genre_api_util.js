  
  export const fetchGenre = (genreId) => {
    return $.ajax({
      url: `api/genres/${genreId}`,
      method: "get",
    });
  };