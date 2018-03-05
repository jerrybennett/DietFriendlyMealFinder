class Api::V1::RecipesController < ApplicationController
  before_action :set_recipe, only: [:show,:update,:destroy]

  def index
    recipes = Recipe.all
    render json: recipes, status: 200
  end

  def create
   recipe = Recipe.find_or_create_by(recipe_params)
   # Ultimate goal:
   # user = User.find(params[:user_id])

   # quick fix:
   user=User.all.first
   recipe.user = user
   params[:ingredients].each do |i|
     ingredient = Ingredient.find_or_create_by(name: i)
     if !ingredient.recipes.include?(recipe)
         ingredient.recipes << recipe
       end
   end
   render json: recipe, status: 201
 end

  def update
    @recipe.update(recipe_params)
    render json: @recipe, status: 200
  end

  def destroy
    recipeId = @recipe.id
    @recipe.destroy
    render json: {message:"Zap! Recipe deleted", recipeId:recipeId}
  end

  def show
    render json: @recipe, status: 200
  end

  private
  def recipe_params
    params.permit(:title, :attribution, :source, :image_url, :rating, :total_time, :ingredients, :user_id)
  end

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end
end
