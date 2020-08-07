import React from 'react';
import './Player.css';
import Body from './Body';
import Footer from './Footer';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useSelector } from 'react-redux';

const Player = () => {
  const store = useSelector((state) => state.userReducer);
  const handleMenu = () => {
    document.querySelector('.sidebar').classList.toggle('open');
  };

  return (
    <div className="player">
      <div className="player__body">
        <MenuIcon onClick={handleMenu} className="menu" />
        <div className="sidebar">
          <img
            className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
          />

          <SidebarOption Icon={HomeIcon} title="Home" />
          <SidebarOption Icon={SearchIcon} title="Search" />
          <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
          <br />
          <strong className="sidebar__title">PLAYLIST</strong>
          <hr />

          {store?.playlist?.items?.map((playlist) => (
            <SidebarOption title={playlist.name} />
          ))}
        </div>
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
