class UsersController < ApplicationController
  def index
    render json: User.all()
  end
  
  def create
  end

  def show
    @user = User.find_by(name: params[:id])
    render json: @user
  end

  def update
  end

  def destroy
  end
end
