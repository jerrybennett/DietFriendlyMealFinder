# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
10.times do
  User.create(name: Faker::Name.name)
end

# Recipe.destroy_all
# 20.times do
#   Recipe.create(title: Faker::Food.dish, publisher: Faker::Book.publisher, publisher_url: Faker::Internet.url, social_rank: Faker::Number.number(3), image_url: 'https://source.unsplash.com/food/300x300', ingredients:[Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient,Faker::Food.ingredient], user_id: User.all.sample.id)
# end
