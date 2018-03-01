class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :publisher
      t.string :publisher_url
      t.integer :social_rank
      t.string :image_url
      t.string :ingredients, array: true, default: []
      t.integer :user_id

      t.timestamps
    end
  end
end
