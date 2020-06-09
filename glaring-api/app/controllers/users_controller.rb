class UsersController < ApplicationController
  def index
    # GET
    render json: User.all()
  end
  
  def create

  end

  def show
    # GET
    @user = User.find_by(name: params[:id])
    render json: @user.to_json 
  end

  def update
  end

  def destroy
  end
end
