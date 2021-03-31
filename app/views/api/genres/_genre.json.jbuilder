json.extract! genre, :id, :genre_name
json.genreMovies genre.movies.each do |movie|
    json.partial! 'api/movies/movie', movie: movie
end