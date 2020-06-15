Rails.application.routes.draw do
  
  scope path: '/api', controller: :api do
    root to: 'api#index'
  
    resources :users, shallow: true do
      post '/authenticate', to: 'auth#auth', as: :authenticate
      post '/login' => 'auth#create', as :login
      get '/logout', to: 'auth#destroy', as: :logout
      # post '/logout', to: 'sessions#destroy', as: :logout


      get '/signup', to: 'users#new', as: :signup
      post '/users' => 'users#create', as: :users
    end

    resources :groups, shallow: true do
      resources :events  
    end
  end
end
