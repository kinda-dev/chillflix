class MyList < ApplicationRecord
    validates :movie_id, :profile_id, presence: true
    validates :profile_id, uniqueness: {scope: :movie_id}

    belongs_to :movie,
        foreign_key: :movie_id,
        class_name: :Movie

    belongs_to :user,
        foreign_key: :profile_id,
        class_name: :User
end
