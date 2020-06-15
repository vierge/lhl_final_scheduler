class SessionsController < ApplicationController
  def create
    user = User.find_by_email(params[:email])
    if user&.valid_password?(params[:password]) 
      render json: { user: user, token: user[:authentication_token] }
    end
  end

  # def destroy
  # end

end
