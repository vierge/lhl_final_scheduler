class User < ApplicationRecord
  has_many :reservations
  has_many :memberships
  has_many :events, through: :reservations
  has_many :groups, through: :memberships
end
