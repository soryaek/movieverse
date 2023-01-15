import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';

export const Trailer = ({id}) => {
    const [youtubeId, setYoutubeId] = useState([]);
    
    const fetchYoutubeId = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a64879763b86ab20c959a57ad7c5d005&append_to_response=videos`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors && data.videos.results.length > 0 ) {
                for (let i=0; i < data.videos.results.length; i++) {
                    if (data.videos.results[i]) {
                        setYoutubeId(data.videos.results[i].key);
                        return
                    }
                }
            } 
            else {
                setYoutubeId('')
            }
        });
    }

    useEffect(() => {
        fetchYoutubeId();
    }, []); 

    const _onReady = (event) => {
        event.target.pauseVideo();
    }

    const _onPlay = (event) => {
        event.target.playVideo();
    }
    
    // https://developers.google.com/youtube/player_parameters
    const opts = {
        height: '390',
        width:"100%",
        playerVars: {
            autoplay: 1,
        }
    };

    return <YouTube videoId={youtubeId} opts={opts} onReady={_onPlay} />;
  }

