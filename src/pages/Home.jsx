import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function Home() {
  return (
    <div className="home">
      {/* <h1>This is HOMEPAGE</h1> */}

      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
          {/* Link */}
        </div>

        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
          {/* Link */}
          {/* Icon */}
          {/* Avatar */}
        </div>
      </div>

      <div className="home__body"></div>
    </div>
  );
}

export default Home;
