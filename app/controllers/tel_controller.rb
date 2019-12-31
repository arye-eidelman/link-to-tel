class TelController < ApplicationController
  def show
    redirect_to "tel:#{params["tel"]}"
  end
end