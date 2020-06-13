class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
        t.string :name
        t.text :description
        t.string :location
        t.timestamp :start_time
        t.timestamp :end_time
        t.string :photo
        t.string :colour
        t.references :group, foreign_key: true
    end
  end
end
