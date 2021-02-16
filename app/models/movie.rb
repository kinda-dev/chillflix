class Movie < ApplicationRecord
    validates :title, :description, :rating, :year, :duration, presence: true

    has_many :moviesGenre,
        foreign_key: :movie_id,
        class_name: :MoviesGenre
end
