import React from 'react';
import { withRouter } from 'react-router-dom';





class SearchComponent extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
        
        this.handleSearch = this.handleSearch.bind(this)
        this.searchFunction = this.searchFunction.bind(this)
        this.openSearchResult = this.openSearchResult.bind(this)
        this.clearFields = this.clearFields.bind(this)
        
        this.hideElement = React.createRef();
        this.clear = null
        this.movies = {
            "BACK TO THE FUTURE": {id: 1, title: "BACK TO THE FUTURE", description: "Back to the Future is an American science fiction/…he past and jeopardizes his own future existence.", rating: "PG-13", year: 1985, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bc5f5d688549ef57759035d0643e0c990ad236f0/back_to_the_future_background.jpg"},
            "FIGHT CLUB": {id: 2, title: "FIGHT CLUB", description: "It is based on the 1996 novel of the same name by … a destitute woman, Marla Singer (Bonham Carter).", rating: "PG-13", year: 1999, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ea923a1546c6ec8cdd855e19b0f3a3ebd3e5e452/fight_club_image.jpg"},
            "WAR DOGS": {id: 3, title: "WAR DOGS", description: "Loosely based on the true story of two young men, … Pentagon to arm America's allies in Afghanistan.", rating: "R", year: 2016, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dc63a191fe7eaaca825f1f39f8c12c9e77fa8c0e/war_dogs_image.jpg"},
            "INCEPTION": {id: 4, title: "INCEPTION", description: "The film stars Leonardo DiCaprio as a professional… by infiltrating the subconscious of his targets.", rating: "PG-13", year: 2010, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7d7396f792c22622e60dc0cd4bd205dbc627605a/inception_image.jpg"},
            "LEGEND": {id: 5, title: "LEGEND", description: "The true story of London's most notorious gangster…les to go legitimate for local girl Frances Shea.", rating: "R", year: 2015,movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--34905b6b2bf5d6d314882730090d57713cb980b4/legend_image.jpg"},
            "THE TRIAL OF THE CHICAGO 7": {id: 6, title: "THE TRIAL OF THE CHICAGO 7", description: "The film follows the Chicago Seven, a group of ant…e 1968 Democratic National Convention in Chicago.", rating: "R", year: 2020, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--84ba9ed0aa5da1478da9220ff23b76804671727b/the_trial_of_the_chicago_7_image.jpg"},
            "GRAN TORINO": {id: 7, title: "GRAN TORINO", description: "The story follows Walt Kowalski, a recently widowe… Ford Gran Torino for his initiation into a gang.", rating: "R", year: 2008, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--64b62e79fb45e23ed324ae0dc9d59f5a6ddc02fc/gran_torino_image.jpg"},
            "THE HATEFUL EIGHT": {id: 8, title: "THE HATEFUL EIGHT", description: "In the dead of a Wyoming winter, a bounty hunter a…nhabited by a collection of nefarious characters.", rating: "R", year: 2015, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1ed4af1c2cd546d124f9bc23c0feccb72568c9a1/the_hateful_eight_image.jpg"},
            "THE THEORY OF EVERYTHING": {id: 9, title: "THE THEORY OF EVERYTHING", description: "The Theory of Everything is the story of the most …e with whilst studying at Cambridge in the 1960s.", rating: "PG-13", year: 2014, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6e5299cb9784c7a220735b2371cb2a1ec3cad989/the_theory_of_everything_image.jpg"},
            "HOOK": {id: 10, title: "HOOK", description: "When Captain James Hook kidnaps his children, an a…hildren by battling with Captain Hook once again.", rating: "PG", year: 1991, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f64df852a13354ee6f62e0c1737927e47cda88f1/hook_image.jpg"},
            "EXTREMELY WICKED": {id: 11, title: "EXTREMELY WICKED", description: "Extremely Wicked, Shockingly Evil and Vile deliver…phic dramatization of Ted Bundy's murderous life.", rating: "R", year: 2019, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9e788e3a4a5eabbe4b5edc1dbd0a81927188754f/extremely_wicked_image.jpg"},
            "FREE STATE OF JONES": {id: 12, title: "FREE STATE OF JONES", description: "In 1863, Mississippi farmer Newt Knight serves as …uld rather help the wounded than fight the Union.", rating: "R", year: 2016, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--83586e1177c2424a15ee7b4b010c9b2a5586bdc2/free_state_of_jones_image.jpg"},
            "MOLLY'S GAME": {id: 13, title: "MOLLY'S GAME", description: "The true story of Molly Bloom, an Olympic-class sk… high-stakes poker game and became an FBI target.", rating: "R", year: 2017, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--947a8cd0ef0c7c979f9807ff971d02788b86560b/mollys_game_image.jpg"},
            "PINEAPPLE EXPRESS": {id: 14, title: "PINEAPPLE EXPRESS", description: "A process server and his marijuana dealer wind up …a competitor while trying to serve papers on him.", rating: "R", year: 2008, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2b3b6ebc7b548ba6dc0286cd28dfef915bc964e2/pineapple_express_image.jpg"},
            "SUPERBAD": {id: 15, title: "SUPERBAD", description: "Two co-dependent high school seniors are forced to…eir plan to stage a booze-soaked party goes awry.", rating: "R", year: 2007, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ee2cdcff3ef3690479c6ec03f3b8a64fdbb2ce3c/superbad_image.jpg"},
            "THE BALLAD OF BUSTER SCRUGGS": {id: 16, title: "THE BALLAD OF BUSTER SCRUGGS", description: "The Ballad of Buster Scruggs is an American Wester…ten, directed, and produced by the Coen brothers.", rating: "R", year: 2018, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4253c8df83e61e2b91840e9c5d9d16a347ba8574/the_ballad_of_buster_scruggs_image.jpg"},
            "THE BOY WHO HARNESSED THE WIND": {id: 17, title: "THE BOY WHO HARNESSED THE WIND", description: "A 13-year-old boy is thrown out of the school he l…ild a windmill to save his village from a famine.", rating: "PG-13", year: 2019, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--44e5757b768c1189edf5bd1aefe0b89104acd191/the_boy_who_harnessed_the_wind_image.jpg"},
            "THE DIRT": {id: 18, title: "THE DIRT", description: "The misfits of Mötley Crüe rise from the streets o…o the heights of international fame in the 1980s.", rating: "R", year: 2019, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBGdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--43828a7ffa0a4ec902afb9a7a62f1428d85d674f/the_dirt_image.jpg"},
            "THE HIGHWAYMEN": {id: 19, title: "THE HIGHWAYMEN", description: "Former Texas Rangers Frank Hamer and Maney Gault j…notorious outlaws Bonnie Parker and Clyde Barrow.", rating: "R", year: 2019, movieImage: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ba2a36e9967aaf19cac4816aece4cd19638acf6e/the_highwaymen_image.jpg"},


        }

    }
    
    componentDidMount() {
    }

    componentWillUnmount() {
        clearTimeout(this.clear)
        this.clear = 0
    }



    
    handleSearch(e) {
        this.setState({search: e.target.value})
    }
   

    handleSubmit(e) {
        e.preventDefault()
        const input = this.state.searched
        const inputNoExtraSpaces = input.trim().split(/ +/).join(' ');
        if (inputNoExtraSpaces !== '') (this.openSearchResult(this.state.searched))
    }

    searchFunction() {
        let input = this.state.search.toUpperCase()
        let inputNoExtraSpaces = input.trim().split(/ +/).join(' ');
        let filteredMovies = Object.values(this.movies).filter(ele => ele.title.includes(inputNoExtraSpaces))
        if (inputNoExtraSpaces === '' || filteredMovies.length === 0) {
            filteredMovies = []
            return (
                filteredMovies
                
            )
        } else {
            return (
                filteredMovies
            )
        }
    }

    clearFields() {
        this.clear = setTimeout(() => {
            this.setState({
                    search: ''
                })
                    
        }, 500)
    }

    openSearchResult(e) {
        console.log(parseInt(e.target.id))
        console.log(parseInt(e.currentTarget.id))

        const movieId = parseInt(e.target.id)
        this.props.history.push(`/watch/${movieId}`)
    }

     
    
    render() {

        return(
            
            

            <div className="home-header-search-wrap">
                <div className="home-header-search-elements-wrap" onBlur={this.clearFields}>
                    <div className="home-header-inner-search-wrap">
                        <input className="home-header-search-input" placeholder="Enter a Movie Title" type="text" value={this.state.search} onChange={this.handleSearch}/>
                        <div className="home-header-search-button-wrap"><i className="fas fa-search"></i></div>
                    </div>
                        <div className="search-result-list-wrap" ref={this.hideElement}>
                            {(this.state.search !== '' && this.state.search.trim().split(/ +/).join(' ') !== '') ?
                                <div className="search-result-list">
                                {(this.searchFunction().length == 0) ?
                                    <h1 className="navbar-search-item">No result matches your search</h1> 
                                    :
                                    this.searchFunction().map((movie) => {
                                        return (
                                            <div key={movie.id} className="navbar-genre-item-hover">
                                                <h1 key={movie.id} id={movie.id} className="navbar-genre-item" onClick={this.openSearchResult}>{movie.title}</h1> 
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            : ''}
                        </div>
                </div>
            </div>


    

        )
    }
}

export default withRouter(SearchComponent);