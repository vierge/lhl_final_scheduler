class EventsController < ApplicationController
  # include GroupEventsHelper

  def index
    # GET
    events = Event.includes(:reservations).where(group_id: params[:group_id]).order(:start_time)
    group = Group.find_by(id: params[:group_id])
    group_events =  { events: events.as_json(include: :reservations), group: group }
    render json: group_events
  end

  def create
    # POST
    newEvent = Event.create!(
      name: params[:name],
      description: params[:description],
      location: params[:location],
      start_time: params[:start_time],
      end_time: params[:end_time],
      photo: params[:photo],
      group_id: params[:group_id],
      colour: params[:colour]
    )
    newReservation = Reservation.create!(
      user_id: params[:user_id],
      event_id: newEvent[:id],
      creator: true
    )
    render json: { event: newEvent, reservation: newReservation }
  end

  def show
    # GET
    @event = Event.find_by(id: params[:id])
    @reservations = Reservation.where(event_id: params[:id])
    render json: { event: @event, reservations: @reservations }
  end

  def update
    case request.method_symbol
    when :put
      # if !Event.exists?(id: params[:id]) || !User.exists?(params[:user_id])
      #   raise "error: invalid!"
      reservation = Reservation.create(event_id: params[:id], user_id: params[:user_id])
      p reservation
        # reservation.update(going: params[:going])
      render json: reservation.to_json 
    when :patch
      newEvent = params[:event]
      newEvent.permit!
      event = Event.find_by(id: params[:id])
      event.update!(newEvent)
      render json: newEvent.to_json
    end
  end

  def destroy
    death_row = Event.find_by(id: params[:id])
    if death_row
      death_row.destroy
      render "delete successful..."
    else
      raise "error: could not delete"
    end

  end

end
