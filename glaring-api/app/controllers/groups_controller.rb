class GroupsController < ApplicationController

  def index
    render json: Group.all()
  end

  def create
  end

  def show
    if params[:id]
      @group = Group.where(:group_id == params[:id])
      render json: @group.to_json
    else
      @groups = Group.all
      render json: @groups.to_json
    end
  end

  def update
  end

  def destroy
  end
end
