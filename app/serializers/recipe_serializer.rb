class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :publisher, :publisher_url, :social_rank, :image_url, :ingredients, :user_id

  belongs_to :user
end
