import React from 'react';
import { Link } from 'react-router-dom';


class SplashComponent extends  React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            errorsplash: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email === '') {
            this.setState({errorsplash: 'Email is required!'})
        } else {
            this.props.history.push('/signup')
        }
        // const user = Object.assign({}, this.state);
        // this.props.signup(user);
    }

    componentDidUpdate() {
        localStorage.setItem('email', JSON.stringify(this.state))
    }

    render() {
        return(
            <div className="splash-outer-wrap">

                    <header className="splash-header">
                        <div className="splash-header-wrapper">
                            <Link to="/" className="splash-header-home-link">
                                <img className="splash-header-logo" src={window.logoImage} alt="Chillflix"/>
                            </Link>   
        
                            <Link to="/login"><button className="splash-login-button">Sign In</button></Link>
                        </div>
                    </header>

                <div className="splash-sections">

                    <div className="hero">

                        <div className="hero-background"></div>

                         <div className="pre-signup-form-container">
                             {/* <div className="pre-signup-form-text"> */}
                                 <h2 className="splash-first-sentence">Unlimited movies, TV shows, and more.</h2>
                                 <h4 className="splash-second-sentence">Watch anywhere. Cancel anytime.</h4>
                             {/* </div> */}

                             <form onSubmit={this.handleSubmit} className="pre-signup-form-box">
                                 
                                 <h4 className="splash-third-sentence">Ready to watch? Enter your email to create 
                                 or restart your membership.</h4>
                                 <br/>

                                 <div className="pre-signup-inputs-lockup">
                                    <input className="pre-signup-input" placeholder="Email address" type="text" value={this.state.email} onChange={this.handleEmail} />
                                    <br/>
                                    <button className="pre-signup-button" ><span className="pre-signup-button-text">Get Started {'>'}</span></button>
                                 </div>
                                    <p className="splash-sign-up-error">{this.state.errorsplash}</p>

                             </form>
                             <div className="random-obj"></div>
                         </div>

                         <div className="center-pixel"></div>

                    </div>

                    <section className="splash-television-element">

                        <div className="splash-television-first-child">
                            
                            <div className="splash-television-text-container">
                                <h2 className="television-first-sentence">Enjoy on your TV.</h2>
                                <h3 className="television-second-sentence">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                            </div>

                            <div className="splash-television-image-container">
                                <div className="splash-television-animation-container">
                                    <img className="tv-img" src={window.tvImage} alt="televisionImage"/>
                                    <div className="splash-videoanimation">
                                        <video className="splash-video" controls autoPlay loop muted><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></source></video>
                                        <div className="splash-television-animation-text"></div>
                                    </div>
                                </div>
                                <div className="center-pixel"></div>
                            </div>

                        </div>


                    </section>

                        <div className="splash-footer-wrapper">   
                            <div className="-splash-footer-first-child">
                                <div className="splash-footer-divider"></div>
                                <footer className="splash-footer">
                                    <div className="splash-footer-top">Work in progress. Developed by Fabio: <a className="fabio-email" href="mailto:maybe.fabio.com">Mail me for information!!</a></div>
                                </footer>
                                <div className="center-pixel"></div>
                            </div>
                        </div> 

                </div>   

            </div>


        )
    }
}

export default SplashComponent;