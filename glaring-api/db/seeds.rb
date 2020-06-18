# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# MANUAL SEEDS GO HERE #

# groups

Group.create(name: 'Black Lives Matter', description: "All Cops Are Bastards. De-colonization and dignity.", colour: "black")
Group.create(name: 'smoko', description: "it's 46 degrees in the queensland heat", colour: "orange")
Group.create(name: "Rachel's fine cartoons", description: "purveyors of fine animation and animated friendship", colour: "violet")
Group.create(name: "a box", description: "cardboard feels weird on my skin", colour: "burlywood")
Group.create(name: "Molly's Ex Girlfriends", description: "Molly's ex girlfriends gather to drink and commiserate behind their back. Monthly support group. terfs fuck off", colour: "lightpink")
Group.create(name: "This is the GOAT", description: "Greatness is what we on the brink of.", colour: "blue")
Group.create(name: "Never give up on your dreams", description: "Go hard or go home.", colour: "red")
Group.create(name: "We are Heroes", description: "Saving the day is our mission.", colour: "orange")


# users

User.create(name: "Mara", password: "cringelife", email: "marancholia@gmail.com", phone_number: nil, avatar: nil, colour: "deeppink")
User.create(name: "David", password: "cringelife", email: "david@gmail.com", phone_number: nil, avatar: nil, colour: "blue")
User.create(name: "Wares", password: "cringelife", email: "wares@gmail.com", phone_number: nil, avatar: nil, colour: "teagreen")
User.create(name: "headpats_pls", password: "cringelife", email: "catgirl.uwu@gmail.com", phone_number: nil, avatar: nil, colour: "goldenrod")
User.create(name: "no_cops", password: "cringelife", email: "acab@gmail.com", phone_number: nil, avatar: nil, colour: "red")
User.create(name: "videogames", password: "cringelife", email: "gamers_are_valid@gmail.com", phone_number: nil, avatar: nil, colour:"brown")
User.create(name: "an_egg", password: "cringelife", email: "tbd@gmail.com", phone_number: nil, avatar: nil, colour: "eggshell")
User.create(name: "password", password: "cringelife", email: "user@gmail.com", phone_number: nil, avatar: nil, colour: "skyblue")

# events

Event.create(name: "smoko", description: "go away. i have ten whole minutes for this and it's hot", location: "out front by the fire hydrant", start_time: '2020-06-19T21:30:00', photo: 'https://www.graphic.com.gh/images/2017/MAY/may26/wsmaoke.png', end_time: nil, group_id: 1, colour: "red")
Event.create(name: "basketball", description: "lets play some pickup basketabll", location: "at the local gym", start_time: "2020-06-20T10:00:00", photo: 'https://media.newyorker.com/photos/5cd98b4792eb652e91bb6e37/master/pass/Cunningham-Kawhi.jpg', end_time: nil, group_id: 2, colour: "blue")
Event.create(name: "video games", description: "are you a professional gamer or a decent gamer?", location: "at the local e-sports center", start_time: "2020-06-21T16:45:00", photo: 'https://bsmedia.business-standard.com/_media/bs/img/article/2019-12/28/full/1577547899-9091.jpg', end_time: nil, group_id: 3, colour: "purple")
Event.create(name: "baseball", description: "get ready to swing for the fences", location: "at the baseball diamond", start_time: "2020-06-22T19:15:00", photo: 'https://s7d2.scene7.com/is/image/TWCNews/mlb_baseball_jpeg', end_time: nil, group_id: 4, colour: "yellow")
Event.create(name: "book reading", description: "make sure to read often, really helps people gain knowledge", location: "at the library", start_time: "2020-06-21T13:00:00", photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg/1200px-Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg', end_time: nil, group_id: 1, colour: "green")
Event.create(name: "cooking", description: "want to learn how to cook, because if you do then you are in luck", location: "at the local eatery", start_time: "2020-06-27T12:30:00", photo: 'https://cdn.shopify.com/s/files/1/1180/6742/products/cooking-class_1024x1024.jpg?v=1555104805', end_time: nil, group_id: 2, colour: "orange")
Event.create(name: "chess", description: "playing chess is fun", location: "at the exhibition center", start_time: "2020-06-25T17:30:00", photo: 'https://miro.medium.com/max/2616/1*FVfdYFOkVlf2lPswre6iXg.jpeg', end_time: nil, group_id: 3, colour: "gold")
Event.create(name: "painting", description: "painting is a great hobby", location: "at the community center", start_time: "2020-06-26T21:30:00", photo: 'https://media-cdn.tripadvisor.com/media/photo-s/12/d2/6a/64/painting-class-examples.jpg', end_time: nil, group_id: 5, colour: "silver")


# memberships and reservations

Membership.create(user_id: 1, group_id: 2)
Membership.create(user_id: 8, group_id: 2, admin: true)
Membership.create(user_id: 5, group_id: 2)
Membership.create(user_id: 7, group_id: 2)
Membership.create(user_id: 6, group_id: 1)
Membership.create(user_id: 2, group_id: 1)
Membership.create(user_id: 3, group_id: 4)
Membership.create(user_id: 4, group_id: 3)


Reservation.create(user_id: 1, event_id: 1, going: true, creator: true)
Reservation.create(user_id: 5, event_id: 1, going: true)
Reservation.create(user_id: 8, event_id: 1, going: false)
Reservation.create(user_id: 9, event_id: 1, going: false)
Reservation.create(user_id: 2, event_id: 3, going: false)
Reservation.create(user_id: 3, event_id: 3, going: false)
Reservation.create(user_id: 4, event_id: 2, going: false)
Reservation.create(user_id: 6, event_id: 2, going: false)
