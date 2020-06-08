class ApiController < ApplicationController
  def index
   render json: { users: User.all, groups: Group.all, events: Event.all }
  end
end
