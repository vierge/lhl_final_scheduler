class CreateMemberships < ActiveRecord::Migration[6.0]
  def change
    create_table :memberships do |t|
        t.references :user
        t.references :group
        t.boolean :admin, default: false
      t.timestamps
    end
  end
end
