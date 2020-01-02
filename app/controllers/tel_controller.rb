class TelController < ApplicationController
  def show
    redirect_to "tel:#{params["id"]}"
  end

  def new
    render "home/index"
  end
end