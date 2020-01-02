Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "home#index"
  resources :tel, only: [:new, :show]
  resources :email, only: [:new, :show]
  resources :home, only: :index
end
