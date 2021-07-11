import React from 'react'
import { FaSpotify } from "react-icons/fa";

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=4a1bdacbfecf4e1eae6ed48c8cd8748c&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
    return (
        <div>
           
            <a className="submitButtonStyle" href={AUTH_URL} >
            LOGIN WITH SPOTIFY  <FaSpotify />
            </a>
        </div>
    )
}
