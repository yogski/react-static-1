import React from 'react';
import axios from 'axios';

class ContentWrapper extends React.Component {
    state = {
        songs: []
    };

    componentDidMount() {
        axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=bb4df6405c3919b1c2dd3ae50959afbb&format=json')
        .then(response => {
            this.setState({songs: response.data.tracks.track});
        })
        .catch(err => {
            console.error(err); 
        })
    }

    render()  {
        return(
            <div className="content">
            <h2 className="content-head is-center">Top {this.state.songs.length} Songs on Last.fm</h2>
    
            <div className="pure-g">
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                    {this.state.songs.map((song, index) => 
                    <div>
                        <h3 className="content-subhead">
                            {index+1}. {song.name}
                        </h3>
                        <p>played {song.playcount} times</p>
                        <p>by {song.artist.name}</p>
                    
                    </div>
                    )}

                    <h3 className="content-subhead">
                        <i className="fa fa-rocket"></i>
                        Get Started Quickly
                    </h3>
                    <p>
                        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                    </p>
                </div>
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                    <h3 className="content-subhead">
                        <i className="fa fa-mobile"></i>
                        Responsive Layouts
                    </h3>
                    <p>
                        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                    </p>
                </div>
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                    <h3 className="content-subhead">
                        <i className="fa fa-th-large"></i>
                        Modular
                    </h3>
                    <p>
                        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                    </p>
                </div>
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                    <h3 className="content-subhead">
                        <i className="fa fa-check-square-o"></i>
                        Plays Nice
                    </h3>
                    <p>
                        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                    </p>
                </div>
            </div>
        </div>
            )
    }
}

export default ContentWrapper;