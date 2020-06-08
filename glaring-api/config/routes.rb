Rails.application.routes.draw do
  root to: 'api#index'

  scope path: '/api', controller: :api do
  
    resources :users, shallow: true do
      get '/login', to: 'sessions#create', as: :login
      get '/logout', to: 'sessions#destroy', as: :logout
    end

    resources :groups, shallow: true do
      resources :events  
    end
  end
end
