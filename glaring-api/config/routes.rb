Rails.application.routes.draw do
  

  devise_for :users
  scope path: '/api', controller: :api do
    root to: 'api#index'
  
    resources :users, shallow: true do
      get '/login', to: 'sessions#create', as: :login
      get '/logout', to: 'sessions#destroy', as: :logout
    end

    resources :groups, shallow: true do
      resources :events  
    end
  end
end
