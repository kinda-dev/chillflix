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
        this.props.fetchAllMovies();
        // this.props.fetchAllgenres();
 

    }
   
    
    
    
    render() {
        
        if (this.props.movies.length === 0) return null;

        return(
            
            
            <div className='home-outer-wrap' >
                {console.log('render')}
                
              <NavbarComponent/>
    
                {/* <HeaderComponent movie = {this.props.movies[Math.floor(Math.random() * 9)]} /> */}
                <HeaderComponent />


                {/* <RowComponent movies = {this.props.movies} fetchMovie = {this.props.fetchMovie} /> */}
                <div className="browse-genre-rows">
                    <div className="browse-row">
                        <h2 className="row-title">TRENDING NOW</h2>
                        <CarouselComponent movies = {this.props.movies} myList = {this.props.currentUser.myListMovieIds} />
                    </div>
                </div>

                {/* <RowComponent /> */}



                
                {/* <div className="all-movies">
                    {this.renderAllMovies()}
                </div> */}

                {/* following rows to display different genres */}

                {/* <div className="row">
                    <h2 className="row-title">Top Trending</h2>
                    <ul className="row-elements">
                        {this.renderAllMovies()}
                    </ul>
                </div> */}

                
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