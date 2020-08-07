import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromURL } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDispatch, useSelector } from 'react-redux';
import { userAction, userToken, userPlaylist, discover_weekly } from './action';
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {
  const store = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch(userToken(_token));
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch(userAction(user));
      });

      spotify.getUserPlaylists().then(playlist => {
        dispatch(userPlaylist(playlist))
      })

      spotify.getPlaylist('1oSlx4XxBp12uknXcuhaDg')
      .then(response => 
           dispatch(discover_weekly(response))
          
          
        )
        


    }
  }, [dispatch]);

  return <div className="app">{store.token ? <Player /> : <Login />}</div>;
}

export default App;
