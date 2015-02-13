class TodoItemsController < ApplicationController

	def index
		@todo = TodoItem.new
		@all_todos = TodoItem.all
	end

	def create
		@new_todo = TodoItem.create(params.require(:todo_item).permit(:info, :incomplete, :complete))
		respond_to do |format|
			format.html {redirect_to root_url}
			format.js {}
		end
	end

	def destroy
		@todo = TodoItem.find(params[:id])
		@todo.destroy
		respond_to do |format|
			format.html {redirect_to root_url}
			format.js { render head: :ok }
		end
	end

	
end
