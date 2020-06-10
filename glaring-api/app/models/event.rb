class Event < ApplicationRecord
  has_many :reservations, dependent: :destroy
  has_many :users, through: :reservations
  belongs_to :group
  validates :name, :description, :start_time, :group, presence: true
end
