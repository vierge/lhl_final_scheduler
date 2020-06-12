class Reservation < ApplicationRecord
  belongs_to :event
  belongs_to :user

  validates :event, :user, presence: true
end
