class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
        t.references :user, foreign_key: true
        t.references :event, foreign_key: true
        t.boolean :creator, default: false
        t.boolean :going
      t.timestamps
    end
  end
end
