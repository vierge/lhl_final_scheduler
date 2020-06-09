class UsersController < ApplicationController


  def index
    # GET
    render json: User.all()
  end
  
  def create
    newUser = User.create(
      name: params[:name],
      password: params[:password],
      email: params[:email],
      phone_number: params[:phone_number],
      avatar: params[:avatar]
    )
    render json: newUser.to_json
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

  private

  # def init_user(data)
  #   User.create do |u|
  #     u.name = data.name
  #     u.password = data.password
  #     u.email = data.email
  #     u.phone_number = data.phone_number
  #     u.

  #   end
end
