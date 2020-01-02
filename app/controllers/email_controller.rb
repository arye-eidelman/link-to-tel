class EmailController < ApplicationController
  def show
    redirect_to "mailto:#{params["id"]}"
  end

  def new
    render "home/index"
  end
end