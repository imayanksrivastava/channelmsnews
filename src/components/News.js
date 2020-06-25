import React from "react";

import ClockLoader from "react-spinners/FadeLoader"; 
import PublishedAt from "./PublishedAt";

export default function News(props) {
  return (
    <div>
      <div  className = "clockLoader">
      <ClockLoader
        size={40}
        color={"#123c69"}
        loading={props.isLoading}
      /></div>
      <div className="columns is-multiline div-news-cards">
        {props.news.map((news) => (
          <div key={news.id} className="card media-left is-0-mobile is-1-desktop">
            <div>
              {news.image !== 'None' ?
              <img className="beers" src={news.image} alt="news"></img>
              :<img className="beers" src="/images/default.png" alt="news"></img>
            }
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <div>
                    <p className="title is-6 has-text-centered news-title">
                      {news.title.substring(0,50)}...
                    </p>
                  </div>
                  <div>
                    <div className="read-more">
                      <a
                        href={news.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                      <PublishedAt publishedDate = {news.published}
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
