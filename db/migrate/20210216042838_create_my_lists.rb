class CreateMyLists < ActiveRecord::Migration[5.2]
  def change
    create_table :my_lists do |t|
      t.integer :movie_id, null: false
      t.integer :profile_id, null: false

      t.timestamps
    end

    add_index :my_lists, [:movie_id, :profile_id], unique: true
  end
end
