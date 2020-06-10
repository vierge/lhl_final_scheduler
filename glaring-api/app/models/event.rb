class Event < ApplicationRecord
  has_many :reservations, dependent: :destroy
  has_many :users, through: :reservations
  belongs_to :group
end
