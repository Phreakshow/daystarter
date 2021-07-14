import React from 'react'
import {useState, useEffect} from 'react'
import useAuth from "./useAuth"
import SpotifyWebApi from "spotify-web-api-node"
import TrackSearchResult from './TrackSearchResult'
import Player from "./Player"



const spotifyApi = new SpotifyWebApi({
    clientId: "4a1bdacbfecf4e1eae6ed48c8cd8748c",
})

function Dashboard({code, mood, weather}) {
    const accessToken = useAuth(code);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [playingTrack, setPlayingTrack] = useState();

    function chooseTrack(track){
        setPlayingTrack(track);
        setSearch("")

    };

    function getRecommendations(){
       let weatherMood = `${mood}`;
       if(typeof weather.main === "undefined"){
        weatherMood =  `weather ${mood}`; 
       }else{
        weatherMood = `${weather.weather[0].main} ${mood}`;
         }
       
         
         
        spotifyApi.searchTracks(weatherMood).then(res =>{
           
           setSearchResults(res.body.tracks.items.map(track =>{
             const smallestAlbumImage = track.album.images.reduce((smallest, image) =>{
                 if(image.height < smallest.height) return image
                 return smallest
             }, track.album.images[0]);
 
             return {
                 artist: track.artists[0].name,
                 title: track.name,
                 uri: track.uri,
                 albumUrl: smallestAlbumImage.url
             }
 
           }))
         })

         setSearch("");
         setSearchResults([]);
};


   
 
    useEffect(()=>{
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(()=>{
        if(!search) return setSearchResults([])
        if(!accessToken) return 
       let cancel = false

        spotifyApi.searchTracks(search).then(res =>{
           if(cancel) return
            

          setSearchResults(res.body.tracks.items.map(track =>{
            const smallestAlbumImage = track.album.images.reduce((smallest, image) =>{
                if(image.height < smallest.height) return image
                return smallest
            }, track.album.images[0]);

            return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestAlbumImage.url
            }

          }))
        })
       return () => cancel = true;
    }, [search, accessToken])




    return (
        <div>
            <div >
                <input   
                type='search' 
                placeholder="Search Songs/Artists" 
                value={search} 
                onChange={e=> setSearch(e.target.value)}
                className="search-bar"
                />

                <button onClick={getRecommendations} className="submitButtonStyle"> Recommend me!</button>
              

                <div className="flex-grow-2 my-5" style={{overflowY: "auto"}}>
                    {searchResults.map(track =>(
                        <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack}/>
                    ))}
                </div>
                <div>
                     <Player accessToken={accessToken} trackUri={playingTrack ? playingTrack.uri : ""} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
