Rails.application.routes.draw do
  

  path: '/', to: 'landing#index'


  scope path: '/api', controller: :api do
    root to: 'api#index'
    
    resources :users, shallow: true
    resources :sessions, only: [:create, :update, :destroy]

    # devise_for :users,
    # path: '/',
    # path_names: {
    #   sign_in: 'login',
    #   sign_out: 'logout',
    #   registration: 'signup',
    #   index: '/'
    # }


    # controllers: {
    #   sessions: 'sessions',
    #   registrations: 'registrations'
    # }

    resources :groups, shallow: true do
      resources :events
    end
  end
end
