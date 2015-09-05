class Api::ListingsController < ApplicationController
  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render :show
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    if @listing.delete
      render :show
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  private
  def listing_params
    params.require(:listing).permit(:user_id, :list_id)
  end
end
