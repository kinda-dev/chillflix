class MoviesGenre < ApplicationRecord
    validates :movie_id, :genre_id, presence: true
    validates :genre_id, uniqueness: {scope: :movie_id}

    belongs_to :movie,
        foreign_key: :movie_id,
        class_name: :Movie

    belongs_to :genre,
        foreign_key: :genre_id,
        class_name: :

    
end
