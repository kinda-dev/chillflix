class Api::SessionsController < ApplicationController
    
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login(@user)
             #check this render
             render json: 'api/users/show'
        else
            render json: ['Invalid email/password combination'], status: 401
        end
    end

    def destroy
       @user = current_user
       if @user
            logout
            #check this render
            render :json 'api/users/show'
       else
            render json: ['No user signed in'], status: 404
       end
    end
end
