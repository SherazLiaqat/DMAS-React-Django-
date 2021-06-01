import { map } from "d3-array";
import React, { usestate } from "react";

import Pagination from "./Pagination";
import "./News.css";
let p=0;

export default class News extends React.Component {
  state = {
    users: null,
   
  }


  componentDidMount() {
    this.makeHttpRequestWithPage(1);
  }


  makeHttpRequestWithPage = async pageNumber => {
    const response = await fetch(`http://127.0.0.1:8000/news/${p+pageNumber}`);
    p=p+pageNumber;

    const data = await response.json();
console.log(data);
    this.setState({
      users: data.News,
      
    });
  }

  render() {

    let users, renderPageNumbers;

    if (this.state.users !== null) {
      users = this.state.users.map(user => (
        <div className="site-content-news">
        <div className="posts">
          <div
            className="post-content-news"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="post-image-news">
              <div></div>
              <div className="post-info flex-row">
                <span>
                  <i className="fas fa-map-marker-alt text-gray" />
                  &nbsp;&nbsp;
                  {user.date}
                </span>
                <span>
                  <i className="fas fa-calendar-alt text-gray" />
                  &nbsp;&nbsp;{" "}
                  {user.country}
                
                </span>
                <span>
                Status: &nbsp;&nbsp;{user.status}
                </span>
                <span>
                Type: &nbsp;&nbsp;{user.types}
                </span> 
              </div>
            </div>
            <div className="post-title-news">
              <a href="">
             HEADLINE: {user.headline}
              </a> 
              <p>
              {user.description.slice(0,258)}
                
              </p>

              <button className="btn post-btn-news">
                Read More &nbsp; <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      ));
    }


    return (


    <div>
       <h1>Explore!Latest Disaster News</h1>
        <p className="news-paragraph">
          Here You can read about latest disasters occured aroung the world
        </p>
            {users}
         
            <div className="pagination-News">

        <section className="pagination flex-row">
            <a href="#" onClick={() => this.makeHttpRequestWithPage(-1)}>
              <i className="fas fa-chevron-left" />
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(p)} className="pages">
              {p}
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(1)} className="pages">
            {p+1}
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(2)} className="pages">
            {p+2}
            </a>
            <a href="#" onClick={() => this.makeHttpRequestWithPage(1)}>
              <i className="fas fa-chevron-right" />
            </a>
            
          </section></div>
      </div>
    );
  }}
