class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
        t.references :user
        t.references :event
        t.boolean :creator, default: false
      t.timestamps
    end
  end
end
