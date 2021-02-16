class CreateMoviesGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :movies_genres do |t|
        t.integer :movie_id, null: false
        t.integer :genre_id, null: false
      t.timestamps
    end

    add_index :movies_genres, :movie_id
    add_index :movies_genres, :genre_id

    add_index :movies_genres, [:movie_id, :genre_id], unique: true


  end
end
