class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.string :info
      t.boolean :incomplete
      t.boolean :complete

      t.timestamps null: false
    end
  end
end
