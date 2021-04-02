class Api::GenresController < ApplicationController

    def index 
        # if params[:genre_id]
        #     @movies = Movie.joins(:genres).where(genres: {id: params[:genre_id]})
        # else
        @genres = Genre.all
        # end
        render :index
    end

    def show
        @genre = Genre.find_by(id: params[:id])
        if @genre
            render :show
        else
            render json: @genre.errors.full_messages, status: 404
        end
    end

end
