class GroupsController < ApplicationController

  def index
    render json: Group.all()
  end

  def create
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
