import React from 'react';
import axios from 'axios'; //import library untuk HTTP request

class ContentWrapper extends React.Component {
    //definisikan data internal komponen
    state = {
        songs: []
    };

    //urusan ngambildata
    componentDidMount() {
        axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=bb4df6405c3919b1c2dd3ae50959afbb&format=json')
        .then(response => {
            //ubah data state
            this.setState({songs: response.data.tracks.track});//default ambil json response.data
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
                        <img src={song.image[1].text} alt="image" />
                        <h3 className="content-subhead">
                            {index+1}. {song.name}
                        </h3>
                        <p>played {song.playcount} times</p>
                        <p>by {song.artist.name}</p>
                        <a href={song.url}>Go to song</a>
                    </div>
                    )}

                </div>
            </div>
        </div>
            )
    }
}

export default ContentWrapper;