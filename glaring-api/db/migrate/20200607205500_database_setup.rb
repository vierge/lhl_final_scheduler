class DatabaseSetup < ActiveRecord::Migration[6.0]
  def up
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :email
      t.numeric :phone_number
      t.string :avatar
    end
  end

  def down
    drop_table :users
  end
end
