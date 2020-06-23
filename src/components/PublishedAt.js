import React from "react";
import moment from "moment";

export default function PublishedAt(props) {
    var utcPublishedtime = moment.utc(props.publishedDate);
    var userTime = moment(utcPublishedtime).local().format('YYYYMMDDHHmm');
  return (
    <div>
      <div className="news-date">
        {moment(userTime, "YYYYMMDDHHmm").fromNow()}
      </div>
    </div>
  );
}
