import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="home-wrapper">
      <h1 className="home-title">Yodlr Design Challenge</h1>
      <p className="link-container">
        <Link to="/registration">
          <button className="home-button">Registration Page</button>
        </Link>
        <br />
        <Link to="/admin">
          <button className="home-button">Admin Page</button>
        </Link>
      </p>
    </div>
  );
};


export default HomePage;
