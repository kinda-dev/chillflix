class MyList < ApplicationRecord
    validates :movie_id, :profile_id, presence: true
    validates :profile_id, uniqueness: {scope: :movie_id}

end
