class EventsController < ApplicationController
  helper GroupEventsHelper

  def index
    render json: Event.all()
  end

  def create
  end

  def show
    if params[:group_id]
      @events = GroupEventsHelper.grab(params[:group_id])
    else
      @event = Event.find_by(params[:id])
    end
    render json: @events || @event
  end

  def update
  end

  def destroy
  end

end
