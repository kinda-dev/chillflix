import React from 'react';
import HeaderComponent from '../header/header_container';
import CarouselComponent from './carousels/carousel_component';
import NavbarComponent from './../navbar/navbar_container'




class HomeComponent extends  React.Component {
    constructor(props) {
        super(props);

        // this.makeNavbarFading =this.makeNavbarFading.bind(this);
    }
    
    componentDidMount() {
        // debugger
        this.props.fetchAllGenres();
        // this.props.fetchAllMovies();
 

    }
   
    
    
    
    render() {
        
        if (this.props.genres.length === 0) return null;


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

                

                
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>
                <p className="random-pixel">A</p>




            </div>
        )
    }
}

export default HomeComponent;