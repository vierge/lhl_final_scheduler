# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# MANUAL SEEDS GO HERE #

# groups

Group.create(name: 'Black Lives Matter', description: "All Cops Are Bastards. De-colonization and dignity.")
Group.create(name: 'smoko', description: "it's 46 degrees in the queensland heat")
Group.create(name: "Rachel's fine cartoons", description: "purveyors of fine animation and animated friendship")
Group.create(name: "a box", description: "cardboard feels weird on my skin")
Group.create(name: "Molly's Ex Girlfriends", description: "Molly's ex girlfriends gather to drink and commiserate behind their back. Monthly support group. terfs fuck off")

# users

User.create(name: "Mara", password: "cringelife", email: "marancholia@gmail.com", phone_number: nil, avatar: nil)
User.create(name: "David", password: "cringelife", email: "david@gmail.com", phone_number: nil, avatar: nil)
User.create(name: "Wares", password: "cringelife", email: "wares@gmail.com", phone_number: nil, avatar: nil)
User.create(name: "gay", password: "cringelife", email: "lesbian@gmail.com", phone_number: nil, avatar: nil)
User.create(name: "headpats_pls", password: "cringelife", email: "catgirl.uwu@gmail.com", phone_number: nil, avatar: nil)
User.create(name: "no_cops", password: "cringelife", email: "acab@gmail.com", phone_number: nil, avatar: nil)
User.create(name: "videogames", password: "cringelife", email: "gamers_are_valid@gmail.com", phone_number: nil, avatar: nil)
User.create(name: "an_egg", password: "cringelife", email: "tbd@gmail.com", phone_number: nil, avatar: nil)
User.create(name: "password", password: "cringelife", email: "user@gmail.com", phone_number: nil, avatar: nil)

# events

Event.create(name: "smoko", description: "go away. i have ten whole minutes for this and it's hot", location: "out front by the fire hydrant", start_time: nil, photo: nil)
