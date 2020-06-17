class Reservation < ApplicationRecord
  belongs_to :event
  belongs_to :user

  validates :event, :user, presence: true
  validates_uniqueness_of :user_id, scope: [:user_id, :event_id]
end
