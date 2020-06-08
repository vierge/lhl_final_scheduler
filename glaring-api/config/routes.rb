Rails.application.routes.draw do

  root to: 'api#index'

  scope path: '/api', controller: :api do
  
    resources :users, only: [:show, :create, :destroy]

    resources :groups do
      resources :events 
    end
  end
end
