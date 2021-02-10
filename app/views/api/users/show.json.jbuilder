json.partial! "api/users/user", user: @user

# example for later on

#json.comments do
#    @user.comments.each do |comment|
#        json.set! comment.id do
#            json.extract! comment, :id, :author_id, :body, :created_at
#        end
#    end
# end