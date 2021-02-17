# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    
    user1 = User.create!(email: 'the_dude@google.com', password: 'qwerty123456')

    movie1 = Movie.create!(title: 'Back To The Future', description: 'are you a Chiken?', rating: 'PG-13', year: 1985, duration: '1h 56m')
    movie2 = Movie.create!(title: 'Fight Club', description: "The first rule about fight club is you don't talk about fight club?", rating: 'PG-13', year: 1999, duration: '2h 31m')

  end