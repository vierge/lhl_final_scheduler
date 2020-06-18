class AddPhotosToGroups < ActiveRecord::Migration[6.0]
  def change
    change_table :groups do |t|
      t.string :photo
    end
  end
end
