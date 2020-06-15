class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :colour
      t.string :name
      t.bigint :phone_number
      t.string :avatar
      t.timestamps
    end
  end
end
