# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    require 'open-uri'
  
    User.destroy_all
    Movie.delete_all
    Genre.destroy_all
    MoviesGenre.destroy_all

    ActiveRecord::Base.connection.tables.each do |t|
      ActiveRecord::Base.connection.reset_pk_sequence!(t)
    end
    
    user1 = User.create!(email: 'the_dude@gmail.com', password: 'qwerty123456')

    movie1 = Movie.create!(title: 'BACK TO THE FUTURE', description: 'Back to the Future is an American science fiction/comedy movie directed by Robert Zemeckis and released in 1985. It is about a young man named Marty McFly who accidentally travels into the past and jeopardizes his own future existence.', rating: 'PG-13', year: 1985, duration: '1h 56m')
    movie2 = Movie.create!(title: 'FIGHT CLUB', description: "It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a 'fight club' with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with a destitute woman, Marla Singer (Bonham Carter).", rating: 'PG-13', year: 1999, duration: '2h 31m')
    movie3 = Movie.create!(title: 'WAR DOGS', description: "Loosely based on the true story of two young men, David Packouz and Efraim Diveroli, who won a three hundred million dollar contract from the Pentagon to arm America's allies in Afghanistan.", rating: 'R', year: 2016, duration: '1h 54m')
    movie4 = Movie.create!(title: 'INCEPTION', description: "The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.", rating: 'PG-13', year: 2010, duration: '2h 28m')
    movie5 = Movie.create!(title: 'LEGEND', description: "The true story of London's most notorious gangsters, twins Reggie and Ronnie Kray. As the brothers rise through the criminal underworld, Ronnie advances the family business with violence and intimidation while Reggie struggles to go legitimate for local girl Frances Shea.", rating: 'R', year: 2015, duration: '2h 11m')
    movie6 = Movie.create!(title: 'THE TRIAL OF THE CHICAGO 7', description: "The film follows the Chicago Seven, a group of anti–Vietnam War protesters charged with conspiracy and crossing state lines with the intention of inciting riots at the 1968 Democratic National Convention in Chicago.", rating: 'R', year: 2020, duration: '2h 10m')
    movie7 = Movie.create!(title: 'GRAN TORINO', description: "The story follows Walt Kowalski, a recently widowed Korean War veteran alienated from his family and angry at the world. Walt's young neighbor, Thao Vang Lor, is pressured by his cousin into stealing Walt's prized 1972 Ford Gran Torino for his initiation into a gang.", rating: 'R', year: 2008, duration: '1h 56m')
    movie8 = Movie.create!(title: 'THE HATEFUL EIGHT', description: "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.", rating: 'R', year: 2015, duration: '2h 47m')
    movie9 = Movie.create!(title: 'THE TEORY OF EVERYTHING', description: "The Theory of Everything is the story of the most brilliant and celebrated physicist of our time, Stephen Hawking, and Jane Wilde the arts student he fell in love with whilst studying at Cambridge in the 1960s.", rating: 'PG-13', year: 2014, duration: '2h 03m')
    movie10 = Movie.create!(title: 'HOOK', description: "When Captain James Hook kidnaps his children, an adult Peter Pan must return to Neverland and reclaim his youthful spirit in order to challenge his old enemy. With the help of her and the Lost Boys, he must remember how to be Peter Pan again in order to save his children by battling with Captain Hook once again.", rating: 'PG', year: 1991, duration: '2h 21m')
    movie11 = Movie.create!(title: 'EXTREMELY WICKED', description: "Extremely Wicked, Shockingly Evil and Vile delivers a sobering, graphic dramatization of Ted Bundy's murderous life.", rating: 'R', year: 2019, duration: '1h 48m')
    movie12 = Movie.create!(title: 'FREE STATE OF JONES', description: "In 1863, Mississippi farmer Newt Knight serves as a medic for the Confederate Army. Opposed to slavery, Knight would rather help the wounded than fight the Union.", rating: 'R', year: 2016, duration: '2h 20m')
    movie13 = Movie.create!(title: "MOLLY'S GAME", description: "The true story of Molly Bloom, an Olympic-class skier who ran the world's most exclusive high-stakes poker game and became an FBI target.", rating: 'R', year: 2017, duration: '2h 21m')
    movie14 = Movie.create!(title: "PINEAPPLE EXPRESS", description: "A process server and his marijuana dealer wind up on the run from hitmen and a corrupt police officer after he witnesses his dealer's boss murder a competitor while trying to serve papers on him.", rating: 'R', year: 2008, duration: '1h 57m')
    movie15 = Movie.create!(title: "SUPERBAD", description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.", rating: 'R', year: 2007, duration: '1h 59m')
    movie16 = Movie.create!(title: "THE BALLAD OF BUSTER SCRUGGS", description: "The Ballad of Buster Scruggs is an American Western black comedy anthology film written, directed, and produced by the Coen brothers.", rating: 'R', year: 2018, duration: '2h 13m')
    movie17 = Movie.create!(title: "THE BOY WHO HARNESSED THE WIND", description: "A 13-year-old boy is thrown out of the school he loves when his family can no longer afford the fees. He sneaks into the library and learns how to build a windmill to save his village from a famine.", rating: 'PG-13', year: 2019, duration: '1h 53m')
    movie18 = Movie.create!(title: "THE DIRT", description: "The misfits of Mötley Crüe rise from the streets of Hollywood to the heights of international fame in the 1980s.", rating: 'R', year: 2019, duration: '1h 48m')
    movie19 = Movie.create!(title: "THE HIGHWAYMEN", description: "Former Texas Rangers Frank Hamer and Maney Gault join forces to try and capture notorious outlaws Bonnie Parker and Clyde Barrow.", rating: 'R', year: 2019, duration: '2h 12m')
    
    #genres

    genre1 = Genre.create!(genre_name: "Top Trending")
    genre2 = Genre.create!(genre_name: "Drama")
    genre3 = Genre.create!(genre_name: "Comedies")
    genre4 = Genre.create!(genre_name: "Base on Real Life")
    
    #moviesgenres
    
    moviesgenres1 = MoviesGenre.create!(genre_id: 1,movie_id:1)
    moviesgenres2 = MoviesGenre.create!(genre_id: 1,movie_id:2)
    moviesgenres3 = MoviesGenre.create!(genre_id: 1,movie_id:3)
    moviesgenres4 = MoviesGenre.create!(genre_id: 1,movie_id:4)
    moviesgenres5 = MoviesGenre.create!(genre_id: 1,movie_id:5)
    moviesgenres6 = MoviesGenre.create!(genre_id: 1,movie_id:6)
    moviesgenres7 = MoviesGenre.create!(genre_id: 1,movie_id:7)
    moviesgenres8 = MoviesGenre.create!(genre_id: 1,movie_id:8)
    moviesgenres9 = MoviesGenre.create!(genre_id: 1,movie_id:9)
    moviesgenres10 = MoviesGenre.create!(genre_id: 1,movie_id:10)
    moviesgenres11 = MoviesGenre.create!(genre_id: 1,movie_id:11)
    moviesgenres12 = MoviesGenre.create!(genre_id: 1,movie_id:12)
    moviesgenres13 = MoviesGenre.create!(genre_id: 1,movie_id:13)
    moviesgenres14 = MoviesGenre.create!(genre_id: 1,movie_id:14)
    moviesgenres15 = MoviesGenre.create!(genre_id: 1,movie_id:15)
    moviesgenres16 = MoviesGenre.create!(genre_id: 1,movie_id:16)
    moviesgenres17 = MoviesGenre.create!(genre_id: 1,movie_id:17)
    moviesgenres18 = MoviesGenre.create!(genre_id: 1,movie_id:18)
    moviesgenres19 = MoviesGenre.create!(genre_id: 1,movie_id:19)
    moviesgenres20 = MoviesGenre.create!(genre_id: 2,movie_id:2)
    moviesgenres21 = MoviesGenre.create!(genre_id: 2,movie_id:4)
    moviesgenres22 = MoviesGenre.create!(genre_id: 2,movie_id:7)
    moviesgenres23 = MoviesGenre.create!(genre_id: 2,movie_id:8)
    moviesgenres24 = MoviesGenre.create!(genre_id: 3,movie_id:1)
    moviesgenres25 = MoviesGenre.create!(genre_id: 3,movie_id:10)
    moviesgenres26 = MoviesGenre.create!(genre_id: 3,movie_id:14)
    moviesgenres27 = MoviesGenre.create!(genre_id: 3,movie_id:15)
    moviesgenres28 = MoviesGenre.create!(genre_id: 4,movie_id:3)
    moviesgenres29 = MoviesGenre.create!(genre_id: 4,movie_id:5)
    moviesgenres30 = MoviesGenre.create!(genre_id: 4,movie_id:6)
    moviesgenres31 = MoviesGenre.create!(genre_id: 4,movie_id:9)
    moviesgenres32 = MoviesGenre.create!(genre_id: 4,movie_id:11)
    moviesgenres33 = MoviesGenre.create!(genre_id: 4,movie_id:13)
    moviesgenres34 = MoviesGenre.create!(genre_id: 4,movie_id:17)
    moviesgenres35 = MoviesGenre.create!(genre_id: 4,movie_id:18)
    moviesgenres36 = MoviesGenre.create!(genre_id: 4,movie_id:19)

    # images

    image1 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/back_to_the_future_background.jpg')
    movie1.image.attach(io: image1, filename: 'back_to_the_future_background.jpg')

    image2 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/fight_club_image.jpg')
    movie2.image.attach(io: image2, filename: 'fight_club_image.jpg')

    image3 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/war_dogs_image.jpg')
    movie3.image.attach(io: image3, filename: 'war_dogs_image.jpg')

    image4 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/inception_image.jpg')
    movie4.image.attach(io: image4, filename: 'inception_image.jpg')

    image5 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/legend_image.jpg')
    movie5.image.attach(io: image5, filename: 'legend_image.jpg')

    image6 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/the_trial_of_the_chicago_7_image.jpg')
    movie6.image.attach(io: image6, filename: 'the_trial_of_the_chicago_7_image.jpg')

    image7 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/gran_torino_image.jpg')
    movie7.image.attach(io: image7, filename: 'gran_torino_image.jpg')

    image8 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/the_hateful_eight_image.jpg')
    movie8.image.attach(io: image8, filename: 'the_hateful_eight_image.jpg')

    image9 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/the_theory_of_everything_image.jpg')
    movie9.image.attach(io: image9, filename: 'the_theory_of_everything_image.jpg')

    image10 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/hook_image.jpg')
    movie10.image.attach(io: image10, filename: 'hook_image.jpg')

    image11 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/extremely_wicked_image.jpg')
    movie11.image.attach(io: image11, filename: 'extremely_wicked_image.jpg')
    
    image12 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/free_state_of_jones_image.jpg')
    movie12.image.attach(io: image12, filename: 'free_state_of_jones_image.jpg')

    image13 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/mollys_game_image.jpg')
    movie13.image.attach(io: image13, filename: 'mollys_game_image.jpg')

    image14 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/pineapple_express_image.jpg')
    movie14.image.attach(io: image14, filename: 'pineapple_express_image.jpg')

    image15 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/superbad_image.jpg')
    movie15.image.attach(io: image15, filename: 'superbad_image.jpg')

    image16 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/the_ballad_of_buster_scruggs_image.jpg')
    movie16.image.attach(io: image16, filename: 'the_ballad_of_buster_scruggs_image.jpg')

    image17 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/the_boy_who_harnessed_the_wind_image.jpg')
    movie17.image.attach(io: image17, filename: 'the_boy_who_harnessed_the_wind_image.jpg')

    image18 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/the_dirt_image.jpg')
    movie18.image.attach(io: image18, filename: 'the_dirt_image.jpg')
 
    image19 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_movies_images/the_highwaymen_image.jpg')
    movie19.image.attach(io: image19, filename: 'the_highwaymen_image.jpg')
   
    # trailers clips

    trailer1 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/back_to_the_future_trailer.mp4')
    movie1.trailer.attach(io: trailer1, filename: 'back_to_the_future_trailer.mp4')

    trailer2 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/fight_club_trailer.mp4')
    movie2.trailer.attach(io: trailer2, filename: 'fight_club_trailer.mp4')

    trailer3 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/war_dogs_trailer.mp4')
    movie3.trailer.attach(io: trailer3, filename: 'war_dogs_trailer.mp4')

    trailer4 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/inception_trailer.mp4')
    movie4.trailer.attach(io: trailer4, filename: 'inception_trailer.mp4')

    trailer5 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/legend_trailer.mp4')
    movie5.trailer.attach(io: trailer5, filename: 'legend_trailer.mp4')

    trailer6 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/the_trial_of_the_chicago_seven.mp4')
    movie6.trailer.attach(io: trailer6, filename: 'the_trial_of_the_chicago_seven.mp4')

    trailer7 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/gran_torino_trailer.mp4')
    movie7.trailer.attach(io: trailer7, filename: 'gran_torino_trailer.mp4')

    trailer8 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/the_hateful_eight_trailer.mp4')
    movie8.trailer.attach(io: trailer8, filename: 'the_hateful_eight_trailer.mp4')

    trailer9 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/the_theory_of_everything_trailer.mp4')
    movie9.trailer.attach(io: trailer9, filename: 'the_theory_of_everything_trailer.mp4')

    trailer10 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/hook_trailer.mp4')
    movie10.trailer.attach(io: trailer10, filename: 'hook_trailer.mp4')

    trailer11 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/extremely_wicked_trailer.mp4')
    movie11.trailer.attach(io: trailer11, filename: 'extremely_wicked_trailer.mp4')

    trailer12 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/free_state_of_jones_trailer.mp4')
    movie12.trailer.attach(io: trailer12, filename: 'free_state_of_jones_trailer.mp4')

    trailer13 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/mollys_game_trailer.mp4')
    movie13.trailer.attach(io: trailer13, filename: 'mollys_game_trailer.mp4')

    trailer14 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/pineapple_express_trailer.mp4')
    movie14.trailer.attach(io: trailer14, filename: 'pineapple_express_trailer.mp4')

    trailer15 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/superbad_trailer.mp4')
    movie15.trailer.attach(io: trailer15, filename: 'superbad_trailer.mp4')

    trailer16 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/the_ballad_of_buster_scruggs_trailer.mp4')
    movie16.trailer.attach(io: trailer16, filename: 'the_ballad_of_buster_scruggs_trailer.mp4')

    trailer17 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/the_boy_who_harnessed_the_wind_trailer.mp4')
    movie17.trailer.attach(io: trailer17, filename: 'the_boy_who_harnessed_the_wind_trailer.mp4')

    trailer18 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/the_dirt_trailer.mp4')
    movie18.trailer.attach(io: trailer18, filename: 'the_dirt_trailer.mp4')

    trailer19 = open('https://chillflix-seeds.s3-us-west-1.amazonaws.com/full_stack_video_trailers/the_highwaymen_trailer.mp4')
    movie19.trailer.attach(io: trailer19, filename: 'the_highwaymen_trailer.mp4')



