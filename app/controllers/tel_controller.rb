class TelController < ApplicationController
  def show
    redirect_to "tel:#{params["id"]}"
  end
end