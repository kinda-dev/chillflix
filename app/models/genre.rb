class Genre < ApplicationRecord
    validates :genre_name, presence: true

    has_many :movies_genre,
    foreign_key: :genre_id,
    class_name: :MoviesGenre


    has_many :movies,
        through: :movies_genres,
        source: :movie
end