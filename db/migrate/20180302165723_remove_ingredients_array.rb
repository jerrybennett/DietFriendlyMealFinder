class RemoveIngredientsArray < ActiveRecord::Migration[5.1]
  def change
    remove_column :recipes, :ingredients
  end
end
