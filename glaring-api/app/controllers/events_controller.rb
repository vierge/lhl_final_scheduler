class EventsController < ApplicationController
  # include GroupEventsHelper

  def index
    # GET
    @events = Event.where(group_id: group).order(start_time: 'desc')
    render json: @events.to_json
  end

  def create
    # POST
    newEvent = Event.create(
      name: params[:name],
      description: params[:description],
      location: params[:location],
      start_time: params[:start_time],
      end_time: params[:end_time],
      photo: params[:photo] 
    )
    render json: newEvent.to_json
  end

  def show
    # GET
    @event = Event.find_by(id: params[:id])
    @reservations = Reservation.where(event_id: params[:id])
    render json: { event: @event, reservations: @reservations }
  end

  def update
  end

  def destroy
  end

end
