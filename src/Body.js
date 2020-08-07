import React from 'react';
import './Body.css';
import Header from './Header';
import { useSelector } from 'react-redux';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

const Body = () => {
  const store = useSelector((state) => state.userReducer);
  console.log(store);
  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src={store?.discover_weekly?.images[0]?.url} alt="" />

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{store?.discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {
            store?.discover_weekly?.tracks.items.map(item => <SongRow track={item.track} />)
        }
      </div>
    </div>
  );
};

export default Body;
