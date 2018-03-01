class Api::V1::RecipesController < ApplicationController
  before_action :set_recipe, only: [:show,:update,:destroy]

  def index
    recipes = Recipe.all
    render json: recipes, status: 200
    response = RestClient::Request.execute(
      method: :get,
      url: 'http://food2fork.com/api/search?key=caa2419eda2201f5540d9b478531a912&q=chicken%20garlic',
      headers: {api_key: 'caa2419eda2201f5540d9b478531a912'}
    )
  end

  def create
    recipe = Recipe.create(recipe_params)
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
    params.permit(:title, :publisher, :publisher_url, :image_url, :social_rank, :ingredients, :user_id)
  end

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end
end
