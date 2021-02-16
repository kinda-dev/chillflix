class MoviesGenre < ApplicationRecord
    validates :movie_id, :genre_id, presence: true
    validates :genre_id, uniqueness: {scope: :movie_id}
end
