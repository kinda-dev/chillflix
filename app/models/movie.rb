class Movie < ApplicationRecord
    validates :title, :description, :rating, :year, :duration, presence: true

    has_many :movies_genre,
        foreign_key: :movie_id,
        class_name: :MoviesGenre


    has_many :lists,
        foreign_key: :movie_id,
        class_name: :MyList
    

    has_one_attached :image
    has_one_attached :trailer
end
