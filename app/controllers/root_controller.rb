class RootController < ApplicationController
  before_action :active_user?

  def index
  end

  private

  def active_user?
    redirect_to new_session_url unless current_user
  end
end
