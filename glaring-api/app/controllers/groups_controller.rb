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
    newMembership = Membership.create(
      user_id: params[:user_id],
      group_id: newGroup[:id],
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
    case request.method_symbol
    when :put
      newMembership = Membership.create(
        user_id: params[:user_id],
        group_id: params[:id]
      )
      render json: newMembership.to_json
    when :patch
      newGroup = params[:group]
      newGroup.permit!
      group = Group.find_by(id: params[:id])
      group.update(newGroup)
      render json: group.to_json
    end
  end

  def destroy
    death_row = Group.find_by(id: params[:id])
    puts death_row
    if death_row
      death_row.destroy
    else
      raise "error: could not delete"
    end
    render json: { status: response.status }
  end
end
