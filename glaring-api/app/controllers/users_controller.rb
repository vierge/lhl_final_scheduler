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
    @user = User.find_by(id: params[:id])
    render json: @user.to_json 
  end

  def update
    case request.method_symbol
    when :put
      #PUT
      membership = Membership.find_by(user_id: params[:id], group_id: params[:group_id])
      membership.toggle(:admin).save;
      render json: membership.to_json
    when :patch
      #PATCH
      newUser = params[:user]
      newUser.permit!
      user = User.find_by(id: params[:id])
      user.update(newUser)
      render json: newUser.to_json
    end
  end

  def destroy
    death_row = User.find_by(id: params[:id])
    if death_row
      death_row.destroy
      render "delete successful..."
    else
      raise "error: could not delete"
    end
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
