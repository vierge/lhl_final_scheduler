Rails.application.routes.draw do
  

  
  scope path: '/api', controller: :api do
    root to: 'api#index'
    
    devise_for :users,
    path: '',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }

    resources :groups, shallow: true do
      resources :events  
    end
  end
end
