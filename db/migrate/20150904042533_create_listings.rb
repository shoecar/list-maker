class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.integer :user_id, null: false
      t.integer :list_id, null: false

      t.timestamps null: false
    end

    add_index :listings, :user_id
    add_index :listings, :list_id
  end
end
