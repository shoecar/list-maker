class Listing < ActiveRecord::Base
  validates :user_id, :list_id, presence: true

  belongs_to :user
  belongs_to :list
end
