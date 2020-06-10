class EventsController < ApplicationController
  # include GroupEventsHelper

  def index
    # GET
    @events = Event.where(group_id: params[:group_id]).order(start_time: 'desc')
    render json: @events.to_json
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
      group_id: params[:group_id]
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
      reservation = Reservation.find_by(event_id: params[:id], user_id: params[:user_id]);
      # if !Event.exists?(id: params[:id]) || !User.exists?(params[:user_id])
      #   raise "error: invalid!"
      if !reservation
        reservation = Reservation.new(event_id: params[:id], user_id: params[:user_id])
      end
        reservation.update(going: params[:going])
        reservation.save!
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
