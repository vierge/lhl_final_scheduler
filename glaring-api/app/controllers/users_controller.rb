class UsersController < ApplicationController
  def index
    # GET
    render json: User.all()
  end
  
  def create
    #POST
    newUser = params[:user]
    puts params[:user]
    User.create(@newUser)
    render json: newUser.to_json
    # We'l do the below if we need to:
    # User.create(
    #   name: @newUser.name 
    #   password: @newUser.password 
    #   email: @newUser.email
    #   phone_number: @newUser.phone_number 
    #   avatar: @newUser.avatar)
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
