import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';

export const Trailer = ({id}) => {
    console.log(id);

    const [youtubeId, setYoutubeId] = useState([])
    const fetchYoutubeId = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a64879763b86ab20c959a57ad7c5d005&append_to_response=videos`)
        .then(res => res.json())
        .then((data) => {
            if(!data.errors){
                console.log(data.videos.results[0].key)
                setYoutubeId(data.videos.results[0].key)
            } else {
                setYoutubeId([data.videos.results[1].key]); 
            }
        });
    }
    useEffect(() => {
        fetchYoutubeId();
    }, []); 

    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const _onPlay = (event) => {
        // access to player in all event handlers via event.target
        event.target.playVideo();
    }
  
  
  
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube 
            // videoId="KlyknsTJk0w" 
            videoId={youtubeId}
            opts={opts} 
            onReady={_onPlay} 
            />;
  }

