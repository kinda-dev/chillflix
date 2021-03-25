json.extract! user, :id, :email
json.myListMovieIds user.list_movies.pluck(:id)
