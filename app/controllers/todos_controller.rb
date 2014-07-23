class ToDosController < ApplicationController

  def default_serializer_options
    {root: false}
  end

  respond_to :json

  def index
    @todos = ToDo.all
    respond_with(@todos)
  end

  def show
    @todo = ToDo.find(params[:id])
    respond_with(@todo)
  end

  def create
    @todo = ToDo.new(todo_params)

    if @todo.save
      respond_with(@todo)
    else
      respond_with(@todo.errors)
    end

  end

  private

  def todo_params
    params.require(:todo).permit(:content, :complete)
  end

end
