// The very first thing we will do is access the spotify Api and to access that we need a package called "Spotify Web API Node"
// This package helps us to interact with the Spotify API

import SpotifyWebApi from "spotify-web-api-node";

// Scopes is the array of permissions that we want to give to a user
const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
].join(",");

// We'll need params to add it in the end of the authorization request(url) that we'll make to the Spotify API
const params = {
    scope: scopes,
}

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.tostring()}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyApi;
export { LOGIN_URL };