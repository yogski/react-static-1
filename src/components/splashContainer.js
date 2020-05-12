import React from 'react';

class SplashContainer extends React.Component {
    render()  {
        return(
            <div className="splash-container">
                <div className="splash">
                    <h1 className="splash-head">Big Bold Text</h1>
                    <p className="splash-subhead">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <p>
                        <a href="http://purecss.io" className="pure-button pure-button-primary">Get Started</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default SplashContainer;