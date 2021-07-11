import React from 'react'
import SpotifyPlayer from "react-spotify-web-playback"
import { useEffect, useState } from 'react';

export default function Player({accessToken, trackUri}) {
    const [play, setPlay] = useState(false)

    useEffect(()=>setPlay(true), [trackUri]);

    if(!accessToken) return null
    return (
        <div>
            <SpotifyPlayer
                token = {accessToken}
                showSaveIcon
                callback={state => {
                    if(!state.isPlaying) setPlay(false)
                }}
                play = {play}
                uris={trackUri ? [trackUri] : []}
                magnifySliderOnHover= {true}
                styles={{
                     activeColor: '#fff',
                     bgColor: '#333',
                     color: '#fff',
                     loaderColor: '#fff',
                     sliderColor: '#1cb954',
                     trackArtistColor: '#ccc',
                     trackNameColor: '#fff',
                    }}
                    
            />
        </div>
    )
}
