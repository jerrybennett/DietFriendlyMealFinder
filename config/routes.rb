Rails.application.routes.draw do
  resources :recipes
  resources :users
  namespace :api do
    namespace :v1 do
      get 'users/name'
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
