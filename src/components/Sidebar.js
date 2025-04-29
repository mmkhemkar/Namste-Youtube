import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {


  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

  if(!isMenuOpen) return null

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li><Link to='/'> Home</Link></li>
        <li><Link to='/demo'> demo</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
        <li>Library</li>
      </ul>
      <h1 className="font-bold py-3">Subcriptions</h1>
      <ul>
        <li>Hisrty</li>
        <li>Watch Later</li>
        <li>Liked Video</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold py-3">Explore</h1>
      <ul>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <ul>
        <h1 className="font-bold py-3">Live</h1>
        <li>Tranding</li>
        <li>Live</li>
        <li>News</li>
      </ul>
      <ul>
        <h1 className="font-bold py-3">News</h1>
        <li>Tranding</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;
