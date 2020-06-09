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
      group_id: params[:group_id]
    )
    newReservation = Reservation.create(
      user_id: params[:user_id]
      event_id: newEvent[:id]
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
      # PUT
      reservation = Reservation.find_by(user_id: params[:user_id], event_id: params[:event_id])
      if reservation
        newReservation = reservation.update(going: params[:going])
      else
        newReservation = Reservation.create(
          user_id: params[:user_id],
          event_id: params[:event_id],
          going: params[:going]
        )
      end
      render json: newReservation.to_json
    when :patch
      #PATCH
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
