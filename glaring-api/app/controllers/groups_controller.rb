class GroupsController < ApplicationController

  def index
    render json: Group.all()
  end

  def create
  end

  def show
    if params[:id]
      @group = Group.where(:group_id == params[:id])
      render json: @group
    else
      @groups = Group.all
      render json: @groups
  end

  def update
  end

  def destroy
  end
end
