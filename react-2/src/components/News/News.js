import { map } from "d3-array";
import React, { usestate } from "react";

import Pagination from "./Pagination";
import "./News.css";
const showperpage=2;

export default class News extends React.Component {
  state = {
    loading: true,
    person: null,
   
    paginationstart:0,
    paginationend:showperpage,
    settpagination:null,
    
    
  };
 
  async componentDidMount() {
    const url =
      "http://127.0.0.1:8000/news/1";
    const response = await fetch(url);
    const data = await response.json();


    this.setState({ person: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div className="loading"> Loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }
   /* let person,renderPageNumbers
    {person.map((i, user) => {
      return (
        <section className="container-news">
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
                    {user.country}
                  </span>
                  <span>
                    <i className="fas fa-calendar-alt text-gray" />
                    &nbsp;&nbsp;{" "}
                    {user.date}
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
      </section>
      );
    })}
   

    const pageNumbers = [];
    if (this.state.total !== null) {
      for (let i = 1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
        pageNumbers.push(i);
      }


      renderPageNumbers = pageNumbers.map(number => {
        let classes = this.state.current_page === number ? 'active' : '';

        return (
          <span key={number} className={classes} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span>
        );
      });
    }*/

   const elements = [0, 1, 2, 3,4];
  const onpaginationchange=(paginationstart,paginationend)=>{
    this.setState({paginationstart:paginationstart,paginationend:paginationend})
   
  }
    return (
      <>
        <h1>Explore!Latest Disaster News</h1>
        <p className="news-paragraph">
          Here You can read about latest disasters occured aroung the world
        </p>
        <div>
        {elements.slice(this.state.paginationstart, this.state.paginationend).map((i, index) => {
          return (
            <section className="container-news">
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
                        {this.state.person.News[i].date}
                      </span>
                      <span>
                        <i className="fas fa-calendar-alt text-gray" />
                        &nbsp;&nbsp;{" "}
                        {this.state.person.News[i].country}
                      
                      </span>
                      <span>
                      Status: &nbsp;&nbsp;{this.state.person.News[i].status}
                      </span>
                      <span>
                      Type: &nbsp;&nbsp;{this.state.person.News[i].types}
                      </span> 
                    </div>
                  </div>
                  <div className="post-title-news">
                    <a href="">
                   HEADLINE: {this.state.person.News[i].headline}
                    </a> 
                    <p>
                    {this.state.person.News[i].country.slice(0,258)}
                      
                    </p>
    
                    <button className="btn post-btn-news">
                      Read More &nbsp; <i className="fas fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          );
        })}
         
            

      
</div>
        <section className="container-news">
          
            <Pagination  showperpage={showperpage}
            onpaginationchange={onpaginationchange}
            total={elements.length}
            />
          
        </section>
        {/*  {elements.map((i, index) => {
          return (
            <div className="News">
              <h2>SCORE</h2>
              {this.state.person[i].score}
              <h2>ID</h2>
              {this.state.person[i].id}
              <h2>STATUS</h2>
              {this.state.person[i].fields.status}
              <h2>DATE</h2>
              {this.state.person[i].fields.date.created}
              <h2>TYPE</h2>
              {this.state.person[i].fields.primary_type.name}
              <h2>HEADLINE</h2>
              {this.state.person[i].fields.name}

              <h2>NAME</h2>
              {this.state.person[i].fields.country[0].name}
              <h2>LOCATION</h2>
              {this.state.person[i].fields.country[0].location.lat}
              <h2>DESCRIPTION</h2>
              {this.state.person[i].fields.description}
            </div>
          );
        })}
        <button> NEXT</button>*/}
      </>
    );
  }
}
