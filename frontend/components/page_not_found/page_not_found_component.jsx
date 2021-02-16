import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
   
        
            <div className="not-found-outer-wrap">
                
                <div className="not-found-background">
                    <div className="not-found-text">
                    <h1 className="error-404">404 - Not Found</h1>
                    <h2 className="not-found-sentence">Error occoured has, apologize we do.</h2>
                    <Link to="/browse" className="not-found-home-link">
                        <button className="not-found-button">Home You Go</button>
                    </Link>
                    <div className="center-pixel"></div>
                    </div>

                </div>
            </div>
 
    
);

export default PageNotFound;