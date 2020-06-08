module GroupEventsHelper
  def grab(group)
    return Event.where(:group_id == group).order(start_date: desc)
  end
end
