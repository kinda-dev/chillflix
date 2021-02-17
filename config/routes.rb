Rails.application.routes.draw do
	namespace :api, defaults: {format: :json} do
		resource :user, only: [:create]
		resource :session, only: [:create, :destroy]
		resources :genres, only: [:index, :show]
		resources :movies, only: [:index, :show]
		resources :movies_genres, only: [:index, :show] 
		# do
            # resources :movies, only: [:index]
        # end
		resources :my_lists_lists, only: [:index, :show, :create, :destroy]


	end

	root "static_pages#root"
end
