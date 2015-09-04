class Api::ListsController < ApplicationController
  def index
    @lists = current_user.lists
    render :index
  end

  def show
    @list = List.find(params[:id])
    render :show
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render :show
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @list = List.find(params[:id])
    if @list.delete
      render :show
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  private
  def list_params
    params.require[:list].permit[:name]
  end
end
