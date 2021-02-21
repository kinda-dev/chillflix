json.extract! movie, :id, :title, :description, :rating, :year, :duration

json.movieImage url_for(movie.image) if
movie.image.attached?

json.movieTrailer url_for(movie.trailer) if
movie.trailer.attached?