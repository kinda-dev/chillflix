# Chillflix

[Live!](http://chillflix.herokuapp.com/)

Chillflix, a full stack Netflix clone, is a video streaming application that allows users to watch trailers on demand.

It's been developed using Ruby, Ruby on Rails, PostgresQL, Ajax, React, Redux, HTML5, Scss.

Chillflix, a full stack Netflix clone, is a video streaming application that allows users to watch trailers on demand.

I have created functionality such as User Auth, Movie trailers Index + Movie show Pages, Genres, Search feature, and Movies Playlist

## Table of Contents

- [Technologies used](#Technologies)
- [Features](#features)
- [User Authentication](#1.-User-Authentication)

# Technologies Used

Ruby, Ruby on Rails, PostgresQL, Ajax, React, Redux, HTML5, Scss.

---

# Features

### 1. User Authentication

Chillflix has a User authentication feature which allows them to create their account and have access to the app full functionalities such as creating a playlist, searching for a trailer, watch a trailer on demand.

In addition to making fields required in the frontend, the attributes are also validated in the `user.rb` model.

![Chillflix-User-Auth](app/assets/images/readme_gifs/user_auth.gif)

```
class User < ApplicationRecord

    attr_reader :password

    validates :email, :session_token, presence:true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_one :mylist,
    foreign_key: :profile_id,
    class_name: :MyList

    has_many :list_movies,
        through: :mylist,
        source: :movie


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(32)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(32)
    end

end
```

---

### 2. Movie trailers Index + Movie show Pages

A movie trailers index page is rendered when the user logs in or when clicking "Home" on the nav bar.

Under it, the genres are listed inside carousels with movie trailers filtered for each genre.

Users can hover over the movie images thumbnail under each genre to reveal additional trailer informations and the "Play" button which, once clicked, renders the movie trailer show page allowing the user to watch the trailer on-demand.

Images and video trailers are hosted on `AWS S3`.

![Chillflix-trailers-Index-Show](app/assets/images/readme_gifs/movie_index_show.gif)

```
class HomeComponent extends  React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllGenres();
    }

    render() {

        if (this.props.genres.length < 4) return null;


        return(


            <div className='home-outer-wrap' >

              <NavbarComponent/>

                <HeaderComponent />


                <div className="browse-genre-rows">
                    {this.props.genres.map((genre) => (

                    <div className="browse-row" key={genre.id}>

                        <h2 className="row-title" >{genre.genre_name}</h2>
                        <CarouselComponent  myList = {this.props.currentUser.myListMovieIds} genreMovies={genre.genreMovies} />

                    </div>
                    ))}
                </div>


            </div>
        )
    }
}

export default HomeComponent;
```

---

### 3. Genres

Users can select a genre in the nav bar genre dropdown list. This takes them to the genre show page.

Similar to the movie trailers' index page, users can can hover over the movie images thumbnail under each genre to reveal additional trailer informations and the "Play" button which, once clicked, renders the movie trailer show page allowing the user to watch the trailer on-demand.

The displayed trailers are passed to the component using `mapStateToProps` and are fetched using a custom action which takes advantage of `Ruby on Rails` associations and `json.jbuilder` data format.

![Chillflix-trailers-Genres](app/assets/images/readme_gifs/genres_gif.gif)

```
json.extract! genre, :id, :genre_name
json.genreMovies genre.movies.each do |movie|
    json.partial! 'api/movies/movie', movie: movie
end
```

```
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { fetchGenre } from '../../../actions/genre_actions';

import genreComponent from './genre_component';

const mapStateToProps = ({ session, entities: { users, movies, genres } }, ownProps) => {
    return {
        currentUser: users[session.id],
        genre: genres,
        genreId: parseInt(ownProps.match.params.genreId)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGenre: (genreId) => dispatch(fetchGenre(genreId)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(genreComponent));
```

---

### 4. Search

The `Google Maps API` is featured both on the Business Index page and Business Show page. With the Business Index page, a `marker_util.js` file is created in combination with the latitude and longitude values of a Business and is respectively shown on the Map.

```
let mapLoc
    if (Array.isArray(this.props.businesses)) {
      mapLoc = {
        center: {
          lat: +this.props.businesses[0].lat,
          lng: +this.props.businesses[0].lng,
        },
        zoom: 10,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      }
    } else {
      mapLoc = {
        center: {
          lat: +this.props.businesses.lat,
          lng: +this.props.businesses.lng,
        },
        zoom: 10,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
      }
    }

    this.map = new google.maps.Map(this.mapNode, mapLoc)
    this.MarkerManager = new MarkerManager(this.map)
    this.MarkerManager.updateMarkers(this.props.businesses)
```

---

5. Business Index with Specific Categories

With `selectors`, connecting a container to the Business Index component allowed for easy filters of specific businesses depending on their category such as American, Italian, and Thai.

```
export const getAmericanBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'American (Traditional)'
  )
}

export const getItalianBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Italian'
  )
}

export const getThaiBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Thai'
  )
}

export const getJapaneseBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Japanese'
  )
}

export const getChineseBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Chinese'
  )
}

export const getKoreanBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Korean'
  )
}

export const getCofTeaBiz = (state) => {
  return Object.values(state.entities.businesses).filter(
    (business) => business.category === 'Coffee & Tea'
  )
}
```

6. Useful, Funny, Cool

With a `review_tags` table added, Users are able to interact with other Users reviews and classify a review as "useful", "funny", or "cool". From the backend to frontend, creating the association required the 3 tables of `users`, `reviews` and `review_tags`.

Using `componentDidUpdate()` and obtaining the previous properties of a Review Tag, incrementing or decrementing tag counts became available in real time.

```
  componentDidUpdate(prevProps) {
    const { fetchReviews, business, review } = this.props
    let didUpdate =
      this.props.coolSum !== prevProps.coolSum ||
      this.props.usefulSum !== prevProps.usefulSum ||
      this.props.funnySum !== prevProps.funnySum

    if (review.tagCount && prevProps.review.tagCount && didUpdate) {
      fetchReviews(business.id)
    }
  }
```
