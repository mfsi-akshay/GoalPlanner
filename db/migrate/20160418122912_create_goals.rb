class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.integer :user_id
      t.text :body
      t.text :notes
      t.boolean :complete
      t.datetime :start_date
      t.datetime :end_date
    end
  end
end
