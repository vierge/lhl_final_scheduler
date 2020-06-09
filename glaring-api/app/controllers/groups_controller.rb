class GroupsController < ApplicationController

  def index
    render json: Group.all()
  end

  def create
    #POST
    newGroup = Group.create(
      name: params[:name],
      description: params[:description]
    )
    render json: newGroup.to_json
  end

  def show
      @group = Group.where(id: params[:id])
      render json: @group.to_json
  end

  def update
  end

  def destroy
  end
end
