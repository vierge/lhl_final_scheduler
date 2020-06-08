class ApiController < ApplicationController
  def index
   render json: { users: User.all, groups: Group.all, events: Event.all, memberships: Membership.all, reservations: Reservation.all }
  end
end
