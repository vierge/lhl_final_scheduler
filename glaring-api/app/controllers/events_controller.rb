class EventsController < ApplicationController
  include GroupEventsHelper

  def index
    @events = grab_events_for_group(params[:group_id])
    render json: @events.to_json
  end

  def create
  end

  def show
    @event = Event.find_by(params[:id])
    render json: @event.to_json
  end

  def update
  end

  def destroy
  end

end
