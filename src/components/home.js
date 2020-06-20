import React from "react";

export default function BreakingNews(props) {
  console.log(props);
  return (
    <div>
      <div className="columns is-multiline div-news-cards">
        {props.news.map((news) => (
          <div className="card media-left is-0-mobile is-1-desktop">
            <div>
              {news.urlToImage ?
              <img className="beers" src={news.urlToImage} alt="news"></img>
              :<img className="beers" src="/images/default.png" alt="news"></img>
            }
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <div>
                    <p className="title is-6 has-text-centered news-title">
                      {news.title}
                    </p>
                  </div>
                  <div>
                    <div className="read-more">
                      <a
                        href={news.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {news.source.name}[+]
                      </a>
                    </div>
                    <div className="news-date">{news.publishedAt}</div>
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
