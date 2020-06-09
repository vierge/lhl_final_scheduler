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
      newMembership = Membership.create(
        user_id: params[:user_id],
        group_id: params[:group_id]
      )
      render json: newMembership.to_json
    when :patch
      #PATCH
    end
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
