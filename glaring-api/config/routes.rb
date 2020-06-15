Rails.application.routes.draw do
  

  
  scope path: '/api', controller: :api do
    root to: 'api#index'
    
    devise_for :users

    resources :groups, shallow: true do
      resources :events  
    end
  end
end
