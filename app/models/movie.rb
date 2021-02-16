class Movie < ApplicationRecord

    validates :title, :description, :rating, :year, :duration, presence: true
end
