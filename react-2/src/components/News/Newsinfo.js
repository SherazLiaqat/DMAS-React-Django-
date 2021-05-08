import React from "react";
import "./Newsinfo.css";
const Newsinfo = () => {
  return (
    <div>
      <div className="news-info-main">
        <div className="news-info-Headline">
          <h1>Burundi: Floods - Apr 2021</h1>
          <h1>Status: Ongoing Glide FL-2021-000039-BDI</h1>
        </div>
        <div className="news-info-site">
          <div className="news-info-news">
            <ul>
              <li> Overview</li>
              <li> Disaster description</li>
              <li> Affected Countries</li>
            </ul>
          </div>
          <aside className="news-info-sidebar">
            <h1>Disaster description</h1>
            <p>
              {" "}
              ake Tanganyika water level have been rising since February 2021.
              Heavy rainfall since the start of April has worsened the situation
              with further rainfall predicted until mid-May. As of 19 April
              2021, the level of Lake Tanganyika stood at 776.4 metres above sea
              level compared to the normal average level of 772.7 metres. From
              April 12, 2021 in the province of Rumonge households near the
              shores were floo
            </p>
            <div className="news-info-sidebar-counteries">
            <h1>Affected Countries</h1>
            <p>INDIA</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Newsinfo;
