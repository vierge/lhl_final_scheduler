class EventsController < ApplicationController
  include GroupEventsHelper

  def index
    # GET
    @events = grab_events_for_group(params[:group_id])
    render json: @events.to_json
  end

  def create
  end

  def show
    # GET
    @event = Event.find_by(params[:id])
    @reservations = Reservation.where(group_id: params[:id])
    render json: { event: @event.to_json, reservations: @reservations.to_json }
  end

  def update
  end

  def destroy
  end

end
