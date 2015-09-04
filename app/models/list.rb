class List < ActiveRecord::Base
  validates :name, presence: true

  has_many :listings
  has_many :users, through: :listings
end
