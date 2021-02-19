import React from 'react';
import { Link } from 'react-router-dom';
import MovieComponent from './movie_component'

class RowComponent extends  React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstImageIndex: 0,
            // lastImageIndex: 5,
            rowMovies: ''
          };

        //   have to bind arrows click 
        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);

    }

    componentDidMount () {
        // debugger
        this.renderMovies()
    }

    

    previousSlide() {
    //   if (this.state.firstImageIndex > 0) {
        const previousIndex = this.state.firstImageIndex - 1;
          this.setState({firstImageIndex: previousIndex})
        //   this.setState({lastImageIndex: this.state.lastImageIndex --})
          this.renderMovies()
    //   }

    }
    nextSlide() {
        // debugger
        const nextIndex = this.state.firstImageIndex + 1;
    //   if (this.state.lastImageIndex < this.props.movies.length) {
          this.setState({firstImageIndex: nextIndex})
        //   this.setState({lastImageIndex: this.state.lastImageIndex ++})
          this.renderMovies()
    //   }

    }
    renderMovies() {
        const movies = [];
        const lastIndex = this.state.firstImageIndex + 5

        if (lastIndex === this.props.movies.length) this.setState({firstImageIndex: 0})
        
        // const firstIndex = this.state.firstImageIndex

        for(let i = this.state.firstImageIndex; i < lastIndex; i ++){
            movies.push(this.props.movies[i])
        }
        this.setState({rowMovies: movies})
    }

    render() {

        // if (this.props.movies.length === 0) return null;
        if (this.state.rowMovies.length === 0) return null;


        return(

            
            <div className="row">
                <h2 className="row-title">Top Trending</h2>
                <ul className="row-elements">
                    <button className="arrow-left" onClick={this.previousSlide}>ARROW LEFT</button>

                    {/* {this.props.movies.map((movie) => (
                        <MovieComponent movie={movie}/>
                    ))} */}



                    {this.state.rowMovies.map((movie) => (
                        <MovieComponent movie={movie}/>
                    ))}


                    <button className="arrow-right" onClick={this.nextSlide}>ARROW RIGHT</button>
                </ul>
            </div>

        )   
    }

}

export default RowComponent;