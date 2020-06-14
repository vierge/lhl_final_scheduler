class User < ApplicationRecord

  has_secure_password

  has_many :reservations, dependent: :destroy
  has_many :memberships, dependent: :destroy
  has_many :events, through: :reservations
  has_many :groups, through: :memberships

  validates :name, :password, :email, presence: true

  def create
    if user = User.authenticate_with_credentials(email, password)
      if user.authenticate(password)
        user
      else
        nil
      end
    else
      nil
  end
  end
end
