class ToDosController < ApplicationController

  def default_serializer_options
    {root: false}
  end

  respond_to :json

  def index
    @todos = ToDo.all
    respond_with(@todos)
  end

end
