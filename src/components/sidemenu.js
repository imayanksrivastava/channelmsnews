import React from "react";
import { Link } from "react-router-dom";

export default function sidemenu(props) {
  return (
    <div>
      <aside className="menu div-menu-item">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
          <a href="BreakingNews" onClick ={props.newsCategory}>Breaking News</a>
          </li>
          <li>
          <a href="covid" onClick ={props.newsCategory}>#COVD19</a> 
          </li>
          <li>
          <a href="blacklivesmatter" onClick ={props.newsCategory}>#BlackLivesMatter</a> 
          </li>
        </ul>
        <p className="menu-label">Categories</p>
        <ul className="menu-list">
        <li>
          <a href="India" onClick ={props.newsCategory}>News From My Home</a>
          </li>
          <li>
            <Link
              to={{
                pathname: "/category/business",
                state: { fromNav: true },
              }}
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/category/sports",
                state: { fromNav: true },
              }}
            >
              Sports
            </Link>
          </li>
          <li>
            <Link 
              to={{
                pathname: "/category/technology", 
                state: {fromNav: true},
            }}>Technology</Link>
          </li>
          <li>
            <Link 
              to={{
                pathname:"/category/science",
                state: {fromNav: true},
            }}
              >Science</Link>
          </li>
          <li>
            <Link 
              to={{
                pathname:"/category/health",
                state: {fromNav: true},
            }}>Health</Link>
          </li>
          <li>
            <Link 
              to={{
                pathname:"/category/movie",
                state: {fromNav: true},
            }}>Movies</Link>
          </li>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <Link to="/myaccount">My Account</Link>
          </li>
          <li>
            <a href="/">Sign Out</a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
