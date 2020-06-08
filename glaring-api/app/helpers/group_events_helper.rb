module GroupEventsHelper
  def grab_events_for_group(group)
    return Event.where(group_id: group).order(start_time: 'desc')
  end
end
