class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
        t.string :title, null: false
        t.string :description, null: false
        t.string :rating, null: false
        t.integer :year, null: false
        t.string :duration, null: false

      t.timestamps
    end

      add_index :movies, :title
  end
end


