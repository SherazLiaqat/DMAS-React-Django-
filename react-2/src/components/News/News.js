import { map } from "d3-array";
import React, { usestate } from "react";
import blog1 from "../images/blog1.png";
import img2 from "../images/img-2.jpg";
import blog4 from "../images/blog4.png";
import Pagination from "./Pagination";
import "./News.css";
const showperpage=5;

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
      "http://127.0.0.1:8000/news/2";
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
    const elements = [0, 1, 2, 3, 4,5,6,7,8,9];
  const onpaginationchange=(paginationstart,paginationend)=>{
    this.setState({paginationstart:paginationstart,paginationend:paginationend})
   
  }
    return (
      <>
        <h1>Explore!Latest Disaster News</h1>
        <p className="news-paragraph">
          Here You can read about latest disasters occured aroung the world
        </p>
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
                          {this.state.person.News[i].country}
                        </span>
                        {/* <span>
                          <i className="fas fa-calendar-alt text-gray" />
                          &nbsp;&nbsp;{" "}
                          {this.state.person[i].date}
                        </span>
                        <span>
                        {this.state.person[i].country}
                        </span>
                        <span>
                        {this.state.person[i].country}
                        </span> */}
                      </div>
                    </div>
                    <div className="post-title-news">
                      {/* <a href="">
                      {this.state.person[i].country}
                      </a> */}
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque voluptas deserunt beatae adipisci iusto totam
                        placeat corrupti ipsum, tempora magnam incidunt aperiam
                        tenetur a nobis, voluptate, numquam architecto fugit.
                        Eligendi quidem ipsam ducimus minus magni illum
                        similique veniam tempore unde?
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
