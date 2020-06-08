class Event < ApplicationRecord
  has_many :events
  has_many :reservations
  has_many :users, through: :reservations
  belongs_to :group
end
