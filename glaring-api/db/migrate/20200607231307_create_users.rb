class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password
      t.string :email
      t.numeric :phone_number
      t.string :avatar
      t.timestamps
    end
  end
end
