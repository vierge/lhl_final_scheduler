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
    newMembership = Reservation.create(
      user_id: params[:user_id]
      group_id: newGroup[:id]
      admin: true
    )
    render json: { group: newGroup, membership: newMembership }
  end

  def show
      @group = Group.where(id: params[:id])
      @memberships = Membership.where(group_id: params[:id])
      render json: { group: @group, memberships: @memberships }
  end

  def update
  end

  def destroy
  end
end
