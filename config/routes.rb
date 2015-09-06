Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]

  root to: "root#index"

  resource :root, only: :index
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]

  namespace :api do
    resources :lists, except: [:new, :edit, :update]
    resources :listings, only: [:create, :destroy]
  end
end
