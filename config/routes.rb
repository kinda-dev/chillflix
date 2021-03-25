Rails.application.routes.draw do
	namespace :api, defaults: {format: :json} do
		resource :user, only: [:create]
		resource :session, only: [:create, :destroy]
		resources :genres, only: [:index, :show]
		resources :movies_genres, only: [:index, :show] 
		resources :movies, only: [:index, :show]
		resource :list, only: [:index, :create, :destroy]

		


	end

	root "static_pages#root"
end
