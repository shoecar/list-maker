Rails.application.routes.draw do
  root to: "root#index"

  resource :root, only: :index
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]
end
