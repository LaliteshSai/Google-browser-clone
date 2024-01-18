import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import './Home.css'
import Search from './Search'

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <p>about</p>
          <p>store</p>
        </div>
        <div className="home__headerRight">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon className="app__icon"/>
          <Avatar className="avatar__icon">H</Avatar>
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_dark_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
            <Search/>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
