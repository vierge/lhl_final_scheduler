class Membership < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :group, :user, presence: true
  validates_uniqueness_of :user_id, scope: [:user_id, :group_id]
end
