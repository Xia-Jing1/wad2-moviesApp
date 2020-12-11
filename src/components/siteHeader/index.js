import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="2x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="2x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" id="home-link" to="/">
              Home
            </Link>
          </li>

          
          

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>


          
          <li className="nav-item">
            <Link className="nav-link text-white" id="latest-link" to="/movies/latest">
              Latest
            </Link>
          </li>

 

          <li className="nav-item">
            <Link className="nav-link text-white" id="popular-link" to="/movies/popular">
              Popular
            </Link>
          </li>



          <li className="nav-item">
            <Link className="nav-link text-white" id="toprated-link" to="/movies/toprated">
              Top Rated 
            </Link>
          </li>



          <li className="nav-item">
            <Link className="nav-link text-white" id="nowplaying-link" to="/movies/nowplaying">
               Now Playing
            </Link>
          </li>

   


        </ul>
      </nav>

      <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchlist">
              Watch 
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/likelist">
              Like 
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/wantlist">
              Want
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/collection">
              Collection 
            </Link>
          </li>


        <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/enjoylist">
              Enjoy 
            </Link>
          </li>
    </nav>
  );
};

export default SiteHeader;