Rails.application.routes.draw do
  
  scope path: '/api', controller: :api do
    root to: 'api#index'
    post '/authenticate', to: 'auth#authenticate', as: :authenticate
  
    resources :users, shallow: true do
      post '/login' => 'auth#create', as: :login
      post '/logout', to: 'auth#destroy', as: :logout
      # post '/logout', to: 'sessions#destroy', as: :logout
    end

    resources :groups, shallow: true do
      resources :events  
    end
  end
end
