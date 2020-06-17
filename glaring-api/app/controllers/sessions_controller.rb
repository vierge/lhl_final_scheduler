class SessionsController < ApplicationController
  def create
    p params
    user = User.find_by_email(params[:email])
    p user
    if user&.valid_password?(params[:password]) 
      token = user[:authentication_token]
      @user_groups = User.includes(:groups).where(id: user[:id])
      @current_user = user
      render json: @user_groups.as_json(include: :groups)
    else
      head 401
    end
  end

  def update
    user = User.find_by(email: params[:email], authentication_token: params[:token])  
    if !user
      head 401
    else
      head 200 
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user 
    user[:authentication_token] = nil;
    @current_user = nil;
      render json: { user: user,  message: "logged out successfully!" }, status: 201;
    else
      head 500
    end
  end
  
end
