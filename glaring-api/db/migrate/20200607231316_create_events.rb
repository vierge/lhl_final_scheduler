class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
        t.string :name
        t.text :description
        t.string :location
        t.timestamp :start_time
        t.timestamp :end_time
        t.string :photo
        t.references :group
    end
  end
end
