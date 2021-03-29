json.extract! genre, :id, :genre_name
json.genreMovies genre.movies.pluck(:movie_id)
