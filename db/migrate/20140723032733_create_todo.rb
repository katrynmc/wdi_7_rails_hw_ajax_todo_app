class CreateTodo < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :content
      t.boolean :complete

      t.timestamps
    end
  end
end
