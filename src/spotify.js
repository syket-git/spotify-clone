export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectURI = "https://spotify-clone90.web.app/";
const clientID = "30b5a27e27fa4b119ed2572728bfae04";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];


export const getTokenFromURL = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = 
        decodeURIComponent(parts[1]);

        return initial;
    }, {})
}


export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

