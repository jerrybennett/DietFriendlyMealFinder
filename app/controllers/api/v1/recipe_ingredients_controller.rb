class Api::V1::RecipeIngredientsController < ApplicationController

  def index
    recipeIngredients = RecipeIngredient.all
    render json: recipeIngredients, status: 200
  end
  
end
