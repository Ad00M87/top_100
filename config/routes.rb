Rails.application.routes.draw do
  namespace :api do
    resources :songs, except: [:new, :edit]

    get '*other', to: 'static#index'
  end
end
