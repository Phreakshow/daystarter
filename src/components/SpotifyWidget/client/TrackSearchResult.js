import React from 'react'

export default function TrackSearchResult({ track, chooseTrack }) {
    function handlePlay(){
        chooseTrack(track);
    };
    
    return (
        <div className="taskContainer" style={{cursor: "pointer"}} onClick={handlePlay}>
            <img src={track.albumUrl} style={{height: "64px", width: "64px"}} alt="album cover" />
            <div className="spotifySearchResult">
                <div>{track.title}</div>
                <div className="spotifySearchArtist">{track.artist}</div>
            </div>
        </div>
    )
}
