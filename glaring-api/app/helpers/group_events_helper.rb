module GroupEventsHelper
  def parse(group)
    return Event.where(:group_id == group)
  end
end
