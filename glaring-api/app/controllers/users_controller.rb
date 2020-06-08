class UsersController < ApplicationController
  def index
    render json: User.all()
  end
  
  def create
  end

  def show
    @user = User.find_by(name: params[:id])
    render json: @user.to_json 
  end

  def update
  end

  def destroy
  end
end
