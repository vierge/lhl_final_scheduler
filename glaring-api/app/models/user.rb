class User < ApplicationRecord
  has_many :reservations, dependent: :destroy
  has_many :memberships, dependent: :destroy
  has_many :events, through: :reservations
  has_many :groups, through: :memberships
end
