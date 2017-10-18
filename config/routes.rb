Rails.application.routes.draw do
  root 'index#index'

  resources :dashboard do
    root 'dashboard/index#index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
