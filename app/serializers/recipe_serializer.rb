class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :attribution, :source, :rating, :image_url, :ingredients, :user_id

  belongs_to :user
end
