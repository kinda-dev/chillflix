class Genre < ApplicationRecord
    validates :genre_name, presence: true
end
