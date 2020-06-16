class ApplicationController < ActionController::API
  acts_as_token_authentication_handler_for User, except: [:index] 


  # module Validate
  # user = User.find_by(email: params[:email], params[:token])  
  # if !user
  #     render status: 401
  # end 
end
