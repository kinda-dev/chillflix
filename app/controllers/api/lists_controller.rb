class Api::ListsController < ApplicationController

    def create
        @mylist = MyList.new(profile_id: current_user.id, movie_id: params[:movieId]) 
         if @mylist.save 
             render '/api/lists/index'
         else
             render json: ['Video does not exist'], status: 404
         end
     end
 
     def index
         @mylist = current_user.mylist
     end
 
     def destroy
     
       
         @myList = MyList.find_by(profile_id: current_user.id, movie_id: params[:movieId])
         
         @myList.destroy
 
     end

end