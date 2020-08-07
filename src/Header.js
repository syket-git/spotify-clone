import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import {useSelector} from 'react-redux';

const Header = () => {

    const store = useSelector(state => state.userReducer);

    console.log(store.user);

    return (
        <div className="header">
           <div className="header__left">
               <SearchIcon />
               <input type="text" placeholder="Search for Artists, Songs"/>
           </div>
           <div className="header__right">
                <Avatar alt={store?.user?.display_name} src={store?.user?.images[0]?.url === undefined ? " " : store.user.images[0]?.url }  />
               <h4>{store?.user?.display_name}</h4>
           </div>
        </div>
    );
};

export default Header;